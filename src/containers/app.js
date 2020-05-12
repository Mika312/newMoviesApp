import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "../containers/video-list";
import VideoDetail from "../components/video-detail";
import Video from "../components/video";
import axios from "axios";

const API_KEY = "api_key=dcb8af96b8ac2447c12f8ea6e5dcb186";
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  componentDidMount() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(res => {
      this.setState(
        {
          movieList: res.data.results,
          currentMovie: res.data.results[0]
        },
        function() {
          this.applyVideoToCurrentMovie();
        }
      );
    });
  }

  applyVideoToCurrentMovie = () => {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}}?include_adult=false&append_to_response=videos&${API_KEY}&language=fr`
      )
      .then(res => {
        const youtubeKey = res.data.videos.results[0].key;
        const newCurrentMovie = { ...this.state.currentMovie };
        newCurrentMovie.videoId = youtubeKey;
        this.setState({ currentMovie: newCurrentMovie });
      });
  };

  onClickSearch(searchText) {
    if (searchText) {
      axios
        .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
        .then(res => {
          if (res.data && res.data.results[0]) {
            if (res.data.results[0].id !== this.state.currentMovie.id) {
              this.setState({ currentMovie: res.data.results[0] }, () => {
                this.applyVideoToCurrentMovie();
                this.setRecommandation();
              });
            }
          }
        });
    }
  }

  onClickListItem(movie) {
    this.setState({ currentMovie: movie }, () => {
      this.applyVideoToCurrentMovie();
      this.setRecommandation();
    });
  }

  setRecommandation() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}}/recommendations?${API_KEY}&language=fr`
      )
      .then(res => {
        console.log("res", res);
        this.setState({ movieList: res.data.results });
      });
  }

  render() {
    const RenderMovieList = () => {
      if (this.state.movieList.length) {
        return (
          <VideoList
            movieList={this.state.movieList}
            callback={this.onClickListItem.bind(this)}
          />
        );
      }
    };
    return (
      <div>
        <div className="search_bar">
          <SearchBar callback={this.onClickSearch.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-md-4"> {RenderMovieList()}</div>
        </div>
      </div>
    );
  }
}

export default App;

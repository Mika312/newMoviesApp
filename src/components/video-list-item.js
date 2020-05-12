import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";

const VideoListItem = props => {
  const { movie } = props;

  const handleClick = () => {
    props.callback(movie);
  };

  return (
    <li className="list-group-item" onClick={handleClick}>
      <div className="media"></div>
      <div className="media-left">
        <img
          width="100px"
          className="media-object img-rounded"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt="Poster du Film"
        />
      </div>
      <div className="media-body">
        <h5 className="title_list_item">{movie.title}</h5>
      </div>
    </li>
  );
};

export default VideoListItem;

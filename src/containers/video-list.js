import React from "react";
import VideoListItem from "../components/video-list-item";

const VideoList = props => {
  const { movieList } = props;

  const receivedCallback = movie => {
    return props.callback(movie);
  };

  return (
    <div>
      {movieList.map(movie => (
        <VideoListItem
          key={movie.id}
          movie={movie}
          callback={receivedCallback}
        />
      ))}
    </div>
  );
};

export default VideoList;

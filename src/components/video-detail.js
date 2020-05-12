import React, { Fragment } from "react";

const VideoDetail = ({ title, description }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
    </Fragment>
  );
};

export default VideoDetail;

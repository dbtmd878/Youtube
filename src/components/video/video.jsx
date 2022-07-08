import React from "react";

const Video = ({ video }) => {
  console.log(video);
  return <h1>{video.snippet.title}</h1>;
};

export default Video;

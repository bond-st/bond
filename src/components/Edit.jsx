import React from "react";
import links from "../assets/video-links/links.json";
import Nav from "./Nav";

const Edit = () => (
  <div className="edit-unit">
    <Nav />
    {links.edit.map((video) => (
      <div
        className="video-div"
        id={video.title}
        key={video.title}
        align="right"
      >
        <h1>{video.title}</h1>
        <p className="video-date">{video.date}</p>
        <iframe
          className="video"
          id={video.title}
          title={video.title}
          src={video.url}
          frameBorder="0"
          allowFullScreen
        />
        <p className="video-info" align="right">
          {video.description}
        </p>
        <br />
        <br />
      </div>
    ))}
  </div>
);

export default Edit;

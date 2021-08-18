import React from "react";

const Album = (props) => {
  return (
    <>
      <div className="album">
        <div className="album_info">
          <img src={props.albumCover} alt="Album-cover" className="album_img" />
          <p className="album-title">{props.album}</p>
          <span className="album_artist">{props.artist}</span>
        </div>
      </div>
    </>
  );
};

export default Album;

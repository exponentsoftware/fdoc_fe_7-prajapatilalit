import React from "react";

const Album = (props) => {
  return (
    <>
      <div key={props.id} className="album">
        <img src={props.albumCover} alt="album cover" className="album_img" />
        <div className="album_info">
          <p>{props.albumTitle}</p>
          <span className="album_category">{props.artist}</span>
        </div>
      </div>
    </>
  );
};

export default Album;

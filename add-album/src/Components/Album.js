import React from "react";

const Album = (props) => {
  return (
    <>
      <div key={props.id}>
        <img src={props.albumCover} alt="album cover" />
        <p>{props.albumTitle}</p>
        <p>{props.artist}</p>
      </div>
    </>
  );
};

export default Album;

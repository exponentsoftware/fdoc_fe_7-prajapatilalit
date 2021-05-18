import React from "react";

const Album = (props, { removeAlbumCard }) => {
  return (
    <>
      <div key={props.id} className="album">
        <img src={props.albumCover} alt="album cover" className="album_img" />
        <div className="album_info">
          <p>{props.albumTitle}</p>
          <span className="album_category">{props.artist}</span>
          <button onClick={() => removeAlbumCard(props.id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Album;

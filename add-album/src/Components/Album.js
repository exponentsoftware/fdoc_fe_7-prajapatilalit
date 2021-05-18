import React from "react";

const Album = ({ removeAlbumCard, addAlbums }) => {
  console.log();
  return addAlbums.map((addAlbum) => (
    <div key={addAlbum.id} className="album">
      <img src={addAlbum.albumCover} alt="album cover" className="album_img" />
      <div className="album_info">
        <p>{addAlbum.albumTitle}</p>
        <span className="album_category">{addAlbum.artist}</span>
        <button onClick={() => removeAlbumCard(addAlbum.id)}>Delete</button>
      </div>
    </div>
  ));
};

export default Album;

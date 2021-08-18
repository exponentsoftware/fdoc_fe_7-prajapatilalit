import React from "react";
import Album from "./Album1";
const Albums = (props) => {
  return props.albums.map((album) => (
    <Album
      key={album.id}
      album={album.album}
      artist={album.artist}
      albumCover={album.albumCover}
    />
  ));
};

export default Albums;

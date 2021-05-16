import React, { useState } from "react";
import AddAlbum from "./AddAlbum";

const AlbumList = () => {
  const [addAlbum, setAddAlbum] = useState([]);

  //add Album
  const addAlbumCard = (album) => {
    let newAlbums = [album, ...addAlbum];
    setAddAlbum(newAlbums);
  };
  return (
    <div>
      <div>
        <h1>Album Lists</h1>
        <AddAlbum save={addAlbumCard} />
        <div>
          {addAlbum &&
            addAlbum.map((currentFile) => {
              return (
                <div key={currentFile.id}>
                  <img src={currentFile.albumCover} alt="cover-pic" />
                  <p>{currentFile.albumTitle}</p>
                  <p>{currentFile.artist}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AlbumList;

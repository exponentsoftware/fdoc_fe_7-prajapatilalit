import React, { useState } from "react";
import AddAlbum from "./AddAlbum";

const AlbumList = () => {
  const [addAlbum, setAddAlbum] = useState([]);

  //add Album
  const addAlbumCard = (album) => {
    let newAlbums = [album, ...addAlbum];
    // localStorage.setItem("addAlbum", JSON.stringify(newAlbums));
    setAddAlbum(newAlbums);
  };
  return (
    <>
      <div className="header">
        <h1>Album Lists</h1>
        <AddAlbum save={addAlbumCard} />
      </div>
      <div>
        {addAlbum &&
          addAlbum.map((currentFile) => {
            return (
              <div key={currentFile.id}>
                <img src={currentFile.albumCover} />
                <p>{currentFile.albumTitle}</p>
                <p>{currentFile.artist}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AlbumList;

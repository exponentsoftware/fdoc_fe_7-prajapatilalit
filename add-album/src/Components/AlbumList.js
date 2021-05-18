import React, { useState } from "react";
import AddAlbum from "./AddAlbum";
import album from "./AlbumData";
import Album from "./Album";

const AlbumList = () => {
  const [addAlbums, setAddAlbums] = useState(album);

  //add Album
  const addAlbumCard = (albumItem) => {
    const newAlbums = [albumItem, ...addAlbums];
    // localStorage.setItem("addAlbum", JSON.stringify(newAlbums));
    setAddAlbums(newAlbums);
  };

  //Delete album

  const removeAlbumCard = (id) => {
    const removeArr = [...addAlbums].filter((albumCard) => {
      return albumCard.id !== id;
    });
    setAddAlbums(removeArr);
  };
  console.log(addAlbums);
  return (
    <>
      <div className="header">
        <h1>Album Lists</h1>
        <AddAlbum save={addAlbumCard} setList={addAlbumCard} />
      </div>
      <div className="container">
        <div className="albums">
          <h1 className="album-heading">Albums</h1>
          <div className="album_item">
            <Album addAlbums={addAlbums} removeAlbumCard={removeAlbumCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumList;

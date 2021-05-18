import React, { useState } from "react";
import AddAlbum from "./AddAlbum";
import album from "./AlbumData";
import Album from "./Album";

const AlbumList = () => {
  const [addAlbum, setAddAlbum] = useState(album);

  //add Album
  const addAlbumCard = (albumItem) => {
    const newAlbums = [albumItem, ...addAlbum];
    // localStorage.setItem("addAlbum", JSON.stringify(newAlbums));
    setAddAlbum(newAlbums);
  };
  console.log(addAlbum);

  //Delete album

  const removeAlbumCard = (id) => {
    const removeArr = [...addAlbum].filter((albumCard) => {
      return albumCard.id !== id;
    });
    setAddAlbum(removeArr);
  };
  console.log(addAlbum);
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
            {addAlbum.map((item) => {
              return (
                <Album
                  key={item.id}
                  albumCover={item.albumCover}
                  albumTitle={item.albumTitle}
                  artist={item.artist}
                  removeAlbumCard={removeAlbumCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumList;

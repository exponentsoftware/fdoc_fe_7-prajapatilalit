import React, { useState } from "react";
import AddAlbum from "./AddAlbum";
import album from "./AlbumData";
import Album from "./Album";

const AlbumList = () => {
  const [addAlbum, setAddAlbum] = useState(album);

  //add Album
  const addAlbumCard = (albumItem) => {
    let newAlbums = [albumItem, ...addAlbum];
    // localStorage.setItem("addAlbum", JSON.stringify(newAlbums));
    setAddAlbum(newAlbums);
  };
  console.log(addAlbum);
  //Delete album

  // console.log(addAlbum);
  return (
    <>
      <div className="header">
        <h1>Album Lists</h1>
        <AddAlbum save={addAlbumCard} setList={addAlbumCard} />
      </div>
      <div>
        {addAlbum.map((item) => {
          return (
            <Album
              key={item.id}
              albumCover={item.albumCover}
              albumTitle={item.albumTitle}
              artist={item.artist}
            />
          );
        })}
        <Album />
      </div>
    </>
  );
};

export default AlbumList;

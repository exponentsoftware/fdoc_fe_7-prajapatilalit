import React, { useState } from "react";
// import axios from "axios";

const AddAlbum = ({ save }) => {
  // const [addAlbum, setAddAlbum] = useState([]);
  const [albumCover, setAlbumCover] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [artist, setArtist] = useState("");

  const fileSelectHandler = (e) => {
    const currentFile = e.target.files[0];
    setAlbumCover(URL.createObjectURL(currentFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const albumData = {
      id: new Date().getTime().toString(),
      albumCover: albumCover,
      artist: artist,
      albumTitle: albumTitle,
    };
    save(albumData);
    // setAddAlbum([...addAlbum, albumData]);
    console.log(albumData);

    setAlbumCover("");
    setAlbumTitle("");
    setArtist("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="albumTitle"
          placeholder="Add Title"
          onChange={(e) => setAlbumTitle(e.target.value)}
          value={albumTitle}
        />
        <input
          type="text"
          name="artist"
          placeholder="Add Artist Name"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />
        <input type="file" name="albumCover" onChange={fileSelectHandler} />
        <button>Upload</button>
      </form>
    </>
  );
};

export default AddAlbum;

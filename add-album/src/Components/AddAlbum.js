import React, { useState } from "react";
import axios from "axios";

const AddAlbum = ({ save }) => {
  const [albumCover, setAlbumCover] = useState(null);
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

    const fd = new FormData();

    fd.append("albumCover", albumData.albumCover);
    fd.append("albumTitle", albumData.albumTitle);
    fd.append("artist", albumData.artist);
    console.log(typeof fd);
    const config = {
      headers: {
        Authorization: "bearer 2e463fc087b60e7d9b95e0afedaeae2ec03e633f",
        "Content-Type": "application/json",
      },
    };
    axios
      .post("https://api.imgur.com/3/image", fd, config)
      .then((res) => {
        return console.log(res);
      })
      .catch((error) => {
        return console.log("error", error);
      });

    console.log(albumData);

    setAlbumCover("");
    setAlbumTitle("");
    setArtist("");
  };

  return (
    <>
      <div className="form-header">
        <form onSubmit={handleSubmit}>
          <h2>Add item here</h2>
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
          <input
            type="file"
            accept="image/*"
            name="albumCover"
            onChange={fileSelectHandler}
          />
          <button className="btn">Upload</button>
        </form>
      </div>
    </>
  );
};

export default AddAlbum;

import React from "react";
// import AddAlbum from "./Components/AddAlbum";
import AlbumList from "./Components/AlbumList";
function App(props) {
  return (
    <>
      {/* <AddAlbum
        key={props.id}
        albumCover={props.albumCover}
        albumTitle={props.albumTitle}
        artist={props.artist}
      /> */}
      <AlbumList />
    </>
  );
}

export default App;

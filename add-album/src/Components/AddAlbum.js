import React, { Component } from "react";

class AddAlbum extends Component {
  state = {
    album: "",
    artist: "",
    albumCover: "",
  };

  fileSelectHandleChange = (e) => {
    const currFile = e.target.files[0];
    this.setState({
      albumCover: URL.createObjectURL(currFile),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="form-header">
          <form>
            <h2>Add Album Here</h2>
            <input
              type="text"
              name="album"
              placeholder="Add Title"
              onChange={(e) => this.setState({ album: e.target.value })}
              value={this.state.album}
              required={true}
            />
            <input
              type="text"
              name="artist"
              placeholder="Add Artist Name"
              onChange={(e) => this.setState({ artist: e.target.value })}
              value={this.artist}
              required={true}
            />
            <input
              type="file"
              accept="image/*"
              name="albumCover"
              onChange={this.fileSelectHandleChange}
              required={true}
            />
            <button className="btn">Upload</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddAlbum;
// const AddAlbum = ({ save }) => {
//   const [list, setList] = useState(album);
//   const [albumCover, setAlbumCover] = useState(null);
//   const [albumTitle, setAlbumTitle] = useState("");
//   const [artist, setArtist] = useState("");

//   const fileSelectHandler = (e) => {
//     const currentFile = e.target.files[0];
//     setAlbumCover({albumCover:URL.createObjectURL(currentFile)});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const albumData = {
//       id: new Date().getTime().toString(),
//       albumCover: albumCover,
//       artist: artist,
//       albumTitle: albumTitle,
//     };

//     const newList = list.concat(albumData);
//     setList(newList);
//     save(albumData);

//     const fd = new FormData();

//     fd.append("image", albumData.albumCover);
//     fd.append("albumTitle", albumData.albumTitle);
//     fd.append("artist", albumData.artist);

//     let config = {
//       Headers: {
//         Authorization: "Client-ID bf6693a339ea8b9",
//         Accept: "application/json",
//       },
//     };
//     axios
//       .post("https://api.imgur.com/3/image", fd, config)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         return console.log(data);
//       })
//       .catch((error) => {
//         return console.log("error", error);
//       });

//     setAlbumCover("");
//     setAlbumTitle("");
//     setArtist("");
//   };

//   return (
// <>
//   <div className="form-header">
//     <form onSubmit={handleSubmit}>
//       <h2>Add item here</h2>
//       <input
//         type="text"
//         name="albumTitle"
//         placeholder="Add Title"
//         onChange={(e) => setAlbumTitle(e.target.value)}
//         value={albumTitle}
//         required={true}
//       />
//       <input
//         type="text"
//         name="artist"
//         placeholder="Add Artist Name"
//         onChange={(e) => setArtist(e.target.value)}
//         value={artist}
//         required={true}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         name="albumCover"
//         onChange={fileSelectHandler}
//         required={true}
//       />
//       <button className="btn">Upload</button>
//     </form>
//   </div>
// </>
//   );
// };

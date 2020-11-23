import React, {useState} from "react";
import { storage } from "../../../firebaseConfig"

import "./index.css";

import orcunProPic from "../img/orcunProfilePic.png";

export default function Info({ userInfo }) {
  

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  if (!userInfo) {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="infoContainer">
        <img src={url} className="profileImg" alt="profile" />

        <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>

        <div className="nameSurnameTxt">
          <h2 className="userNameTxt">{userInfo.name}</h2>
          <h2>{userInfo.surname}</h2>
        </div>
        <div className="userJobCity">
          <h2>{userInfo.job}</h2>
          <h2>{userInfo.location}</h2>
        </div>
      </div>
    );
  }
}

// import { storage } from "../../../firebaseConfig";

// const { t } = useTranslation();
// const [file, setFile] = useState(null);
// const [url, setURL] = useState("");
// const { currentUser } = useAuth();
// function handleChange(e) {
//   setFile(e.target.files[0]);
// }

// function handleUpload(e) {
//   e.preventDefault();
//   const uploadTask = storage.ref(`/images/${file.name}`).put(file);
//   uploadTask.on("state_changed", console.log, console.error, () => {
//     storage
//       .ref("images")
//       .child(file.name)
//       .getDownloadURL()
//       .then((url) => {
//         setFile(null);
//         setURL(url);
//       });
//   });
// }

/* <img src={url} className="profileImg" alt="profile" />
      <form className="uploadImgSection"onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
      <button>{t('profilePage.basicInfo.uploadBtn')}</button>
      </form>
      <h6>{data.name}</h6>
      <p>{data.description}</p> */

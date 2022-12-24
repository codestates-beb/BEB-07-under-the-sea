import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import "./MintPage.css";

function MintingPage() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return <div className="mint-container">
    <header>
      <h1 className="title"> Create New Item </h1>
    </header>
    <form>
      <p className="label-detail">
        <span className="required-label">*</span>
        "Required fields"
      </p>
      <div>

        <div>
          <label className="label">Image, Video, Audio, or 3D Model </label>
          <span className="required-label">*</span><br></br>
          <span className="label-detail" >File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
        </div>

        <label role="button" className="attach-box" shape="squre" >
          <input type="file" className="media" onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }} />
          <div className="preview">{imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}</div>
          <FontAwesomeIcon icon={faImage} size="4x" />
        </label>

      </div>

      <div>
        <div>
          <label className="label">Name</label>
        </div>
        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Item name" required="" value="" />
        </div>

        <div>
          <label className="label">External link</label>
        </div>

        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="https://yoursite.io/item/123" required="" value="" />
        </div>


        <div>
          <label className="label">Description</label>
        </div>

        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Provide a detailed description of your item" required="" value="" />
        </div>

      </div>
    </form>
  </div>
}

export default MintingPage;
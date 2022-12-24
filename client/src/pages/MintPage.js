import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
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
          <span className="required-label">*</span>
        </div>
        <div>
          <input className="Input-text" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Item name" required="" />
        </div>

        <div>
          <label className="label">External link</label><br></br>
          <span className="label-detail" >OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span>
        </div>

        <div>
          <input className="Input-text" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="https://yoursite.io/item/123" required="" />
        </div>


        <div>
          <label className="label">Description</label><br></br>
          <span className="label-detail" >The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</span>
        </div>

        <div>
          <input className="Input-text-large" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Provide a detailed description of your item" required="" />
        </div>

        <div>
          <label className="label">Supply</label><br></br>
          <span className="label-detail" >The number of items that can be minted. No gas cost to you! <FontAwesomeIcon icon={faCircleInfo} /> </span>
        </div>

        <div>
          <input className="Input-text" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="1" required="" />
        </div>
        <span>
          <button type="button" className="Submit"> Create </button>
        </span>
      </div>
    </form>
  </div>
}

export default MintingPage;
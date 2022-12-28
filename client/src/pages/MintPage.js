import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import "./MintPage.css";
import { tokenContract } from "../erc721Abi"

function MintPage({ account }) {
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

  const [choice, setChoice] = useState("Ethereum");
  const networks = ["Ethereum", "Polygon", "Klaytn", "Goerli", "Baobab"]
  const options = networks.map((network) => {
    return <option value={network}>{network}</option>
  })

  const handleNetwork = (event) => {
    setChoice(event.target.value)
  };

  const onClickMint = async () => {
    try {
      if (!account) return
      const response = await tokenContract.methods
        .mintNFT(account, "https://images.unsplash.com/photo-1672129542132-ad329d983d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60") // URI 하드코딩이 아닌 업로드 이미지 링크가 되도록 수정 필요
        .send({ from: account })
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  }

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
        <div className="input-area">
          <label className="label">Name</label>
          <span className="required-label">*</span>
        </div>
        <div>
          <input className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="Item name" required="" />
        </div>

        <div className="input-area">
          <label className="label">External link</label><br></br>
          <span className="label-detail" >OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span>
        </div>

        <div>
          <input className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="https://yoursite.io/item/123" required="" />
        </div>


        <div className="input-area">
          <label className="label">Description</label><br></br>
          <span className="label-detail" >The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</span>
        </div>

        <div>
          <input className="Input-text-large" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="Provide a detailed description of your item" required="" />
        </div>

        <div className="input-area">
          <label className="label">Supply</label><br></br>
          <span className="label-detail" >The number of items that can be minted. No gas cost to you! <FontAwesomeIcon icon={faCircleInfo} /> </span>
        </div>

        <div>
          <input className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="1" required="" />
        </div>

        <div className="input-area">
          <label className="label">Blockchain</label><br></br>
        </div>

        <div>
          <select onChange={handleNetwork} className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="1" required=""> {options}</select>
        </div>

        <div className="input-area">
          <span>
            <button type="button" className="Submit" onClick={onClickMint}> Create </button>
          </span>
        </div>


      </div>
    </form>
  </div>
}

export default MintPage;
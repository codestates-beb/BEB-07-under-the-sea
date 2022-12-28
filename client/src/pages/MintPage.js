import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import "./MintPage.css";
import { tokenContract } from "../erc721Abi"

function MintPage({ account }) {

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm();


  const [inputUrl, setinputUrl] = useState('');
  const inputText = useRef();
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
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
      if (!account || !inputUrl) return
      const response = await tokenContract.methods
        .mintNFT(account, inputUrl)
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="file" accept="image/*"
            className="media" onChange={saveImgFile} ref={imgRef}
          />
          <div className="preview">
            {imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}</div>
          <FontAwesomeIcon icon={faImage} size="4x" />
        </label>

      </div>

      <div>
        <div className="input-area">
          <label className="label">Name</label>
          <span className="required-label">*</span>
        </div>
        <div>
          <input className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="Item name"
            {...register("name", {
              required: "필수 입력 칸입니다."
            })} />
          {errors.name && <small className="alert" role="alert">{errors.name.message}</small>}
        </div>

        <div className="input-area">
          <label htmlFor="External link" className="label">External link</label>
          <span className="required-label">*</span><br></br>
          <span className="label-detail" >Under the sea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</span>
        </div>

        <div>
          <input className="Input-text" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder="https://yoursite.io/item/123"
            {...register("ExternalLink", {
              required: "필수 입력 칸입니다."
            })}
            onChange={(e) => {
              setinputUrl(e.target.value)
            }} ref={inputText} />
          {errors.ExternalLink && <small className="alert" role="alert">{errors.ExternalLink.message}</small>}

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
            <button type="submit" className="Submit" onClick={onClickMint} disabled={isSubmitting}> Create </button>
          </span>
        </div>


      </div>
    </form>
  </div>
}

export default MintPage;
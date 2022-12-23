import React from "react";

export default function MintingPage() {
  return <div>
    <header>
      <h1> Create New Item </h1>
    </header>
    <form>
      <p>
        <span>*</span>
        "Required fields"
      </p>
      <div>

        <div>
          <label>"Image, Video, Audio, or 3D Model" </label>
          <span>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
        </div>

        <div role="button"><input type="file" /></div>

      </div>

      <div>

        <div>
          <label>"Name"</label>
        </div>

        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Item name" required="" value="" />
        </div>

        <div>
          <label>"External link"</label>
        </div>

        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="https://yoursite.io/item/123" required="" value="" />
        </div>


        <div>
          <label>"Description"</label>
        </div>

        <div>
          <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Provide a detailed description of your item" required="" value="" />
        </div>

      </div>
    </form>
  </div>
}
import React, { useState } from "react";
import "../../components/Upload/Upload.css";
import { withRouter } from "react-router-dom";
import UploadList from "./UploadList";
import { v4 as uuidv4 } from "uuid";
const Upload = () => {
  const [imageUploaded, setImageUploaded] = useState([]);
  const [images, setImages] = useState([]);
  const id = uuidv4();
  const mockImages = [
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
    "https://www.mockcop.org/wp-content/uploads/2020/08/Original-2.jpg",
  ];
 
  const uploadTheImage = () => {
    
    

  };

  return (
    <div className="uploadWrapper">
      <div className="UploadText">Upload</div>
      <div className="showUploads">
        <UploadList images={mockImages} />
      </div>
      <div className="btnWrapper">
        <button className="uploadImageBtn" onClick={uploadTheImage}>
          Upload
         
        </button>
      </div>
    </div>
  );
};

export default Upload;

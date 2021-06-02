import React from "react";

const UploadList = (props) => {
  const { images } = props;
  return (
    <div className="uploadList">
      {images.map((image) => {
        return (
          <div className="PreviewImage">
            <img src={image} alt="preview" />
          </div>
        );
      })}
    </div>
  );
};

export default UploadList;

import React from "react";

const FileUpload = () => {
  const fileUploadAndResize = (e) => {};

  return (
    <div className="row">
      <label className="btn btn-primary">
        Choose file
        <input
          type="file"
          hidden
          multiple
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
};

export default FileUpload;

import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";

const FileUpload = ({ onImageChange, images }) => {
  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);

    try {
      const response = await axiosInstance.post(
        "/products/image",
        formData,
        config
      );
      onImageChange([...images, response.data.fileName]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (image) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
  };

  return (
    <div className="flex gap-4">
      {/* Dropzone 컴포넌트 */}
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="min-w-[300px] h-[300px] border flex items-center justify-center">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="text-3xl">+</p>
            </div>
          </section>
        )}
      </Dropzone>

      {/* 업로드된 이미지 표시 부분 */}
      <div className="flex-grow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
        {images.map((image) => (
          <div key={image} onClick={() => handleDelete(image)}>
            <img
              className="min-w-[300px] h-[300px]"
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// images에 대한 PropTypes 선언 추가
FileUpload.propTypes = {
  onImageChange: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FileUpload;

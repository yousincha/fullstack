/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
const ProductImage = ({ product }) => {
  const [images, setImages] = useState([]);
  useState(() => {
    if (product?.images?.length > 0) {
      let images = [];
      product.images.map((imagesName) => {
        return images.push({
          original: `${import.meta.env.VITE_SERVER_URL}/${imagesName}`,
          thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imagesName}`,
        });
      });
      setImages(images);
    }
  }, [product]);
  return <ImageGallery items={images} />;
};

export default ProductImage;

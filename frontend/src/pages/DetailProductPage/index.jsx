import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";

const DetailProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        await axiosInstance.get(`/products/${productId}?type=single`);
      } catch (error) {}
    }
  }, []);
};

export default DetailProductPage;

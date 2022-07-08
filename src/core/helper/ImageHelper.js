import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageURL = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg";
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageURL}
        alt=""
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;

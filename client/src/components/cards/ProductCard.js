import React from "react";
import { Card, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import defaultImage from "../../images/default.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, title, description, slug } = product;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : defaultImage}
          style={{
            height: "150px",
            objectFit: "cover",
          }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/admin/product/${slug}`}>
          <EyeOutlined className="text-warning" />
          <br /> View Product
        </Link>,
        <>
          <ShoppingCartOutlined
            //  onClick={() => handleRemove(slug)}
            className="text-danger"
          />
          <br /> Add to Cart
        </>,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 14)}...`}
      ></Meta>
    </Card>
  );
};

export default ProductCard;

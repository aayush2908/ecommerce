import React from "react";
import { Card, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import defaultImage from "../../images/default.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, title, description, slug, price } = product;

  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No ratings yet</div>
      )}

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
          <Link to={`/product/${slug}`}>
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
          title={`${title} - Rs.${price}`}
          description={`${description && description.substring(0, 40)}...`}
        ></Meta>
      </Card>
    </>
  );
};

export default ProductCard;

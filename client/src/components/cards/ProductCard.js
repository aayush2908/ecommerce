import React from "react";
import { Card, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import defaultImage from "../../images/default.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...product,
        count: 1,
      });
      //remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));
    }
  };

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
          <a onClick={handleAddToCart}>
            <ShoppingCartOutlined
              //  onClick={() => handleRemove(slug)}
              className="text-danger"
            />
            <br /> Add to Cart
          </a>,
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

import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct } from "../../../functions/product";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "White", "Silver", "Blue", "Not specified"],
  brands: ["Apple", "Microsoft", "HP", "Lenovo", "Asus"],
  color: "",
  brand: "",
};

const ProductUpdate = ({ match }) => {
  const [values, setValues] = useState(initialState);

  const { slug } = match.params;
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      setValues({ ...values, ...p.data });
    });
    //   .catch((err) => {});
  };

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product Update</h4>
          <ProductUpdateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;

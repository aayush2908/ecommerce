import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";

const initialState = {
  title: "Product",
  description: "Desc",
  price: "200",
  categories: [],
  category: "",
  subs: [],
  shipping: "Yes",
  quantity: "10",
  images: [],
  colors: ["Black", "White", "Silver", "Blue", "Not specified"],
  brands: ["Apple", "Microsoft", "HP", "Lenovo", "Asus"],
  color: "Black",
  brand: "HP",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);

  const { user } = useSelector((state) => ({ ...state }));
  const {
    title,
    description,
    price,
    category,
    categories,
    subs,
    shipping,
    quantity,
    images,
    color,
    brands,
    colors,
    brand,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        window.alert(`Product ${res.data.title} is created.`);
        window.location.reload();
        //toast.success("Product added successfully");
      })
      .catch((err) => {
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

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
          <h4>Product Create Page</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Shipping</label>
              <select
                name="shipping"
                className="form-control"
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                value={quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Color</label>
              <select
                name="color"
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select color</option>
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Brand</label>
              <select
                name="brand"
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select brand</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-outlined-info">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;

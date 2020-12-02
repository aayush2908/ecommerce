const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const newProduct = new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    res.status(400).send("Product creation failed");
  }
};

// src/controllers/productController.js
const prisma = require('../models/prismaClient');

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

module.exports = { getAllProducts };

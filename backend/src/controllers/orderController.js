// src/controllers/orderController.js
const prisma = require('../models/prismaClient');

const createOrder = async (req, res) => {
  const { userId, totalAmount } = req.body;
  const order = await prisma.order.create({
    data: { userId, totalAmount },
  });
  res.json(order);
};

module.exports = { createOrder };

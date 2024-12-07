import express from "express"
import { placeOrder,placeOrderBkash,placeOrderNagad,allOrders,userOrders,updateStatus } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js";
import authUser from '../middleware/auth.js'
const orderRouter = express.Router();
//adminn order rooutes
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment featurres
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/bkash',authUser,placeOrderBkash);
orderRouter.post('/nagad',authUser,placeOrderNagad);

//userr 
orderRouter.post('/userorders',authUser,userOrders);

export default orderRouter;
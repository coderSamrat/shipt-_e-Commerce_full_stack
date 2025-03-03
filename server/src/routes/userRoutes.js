import { Router } from "express";
import {
      signinController,
      signpController,
      signoutController,
      addToCartController,
      removeFromCartController,
      getCartData,
      resetCartData
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

router.route('/sign-up').post(signpController);
router.route('/sign-in').post(signinController);
router.route('/sign-out').post(verifyToken, signoutController);
router.route('/get-cart-data').get(verifyToken, getCartData);
router.route('/add-to-cart').post(verifyToken, addToCartController);
router.route('/remove-from-cart').post(verifyToken, removeFromCartController);
router.route('/reset-cart').post(verifyToken, resetCartData);

export default router;
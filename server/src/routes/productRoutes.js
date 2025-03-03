import { Router } from "express";
import { addProduct, 
      getAllProducts, 
      getNewCollectionProduct, 
      getPropulerProduct, 
      removeProduct 
} from "../controllers/product.controller.js";

const router = Router();

router.route('/add-product').post(addProduct);
router.route('/remove-product').post(removeProduct);
router.route('/get-all-product').get(getAllProducts);
router.route('/get-new-collection-product').get(getNewCollectionProduct);
router.route('/get-propuler-product').get(getPropulerProduct);


export default router;
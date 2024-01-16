import {Router} from "express";

import getRouter from "./get.routes.js";
// import postRoutes from "./post.routes.js";

const router = Router();

router.use(getRouter);
// router.use(postRoutes);

export default router;
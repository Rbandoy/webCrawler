import { Router } from "express";
import Crawler from "./crawler.js";
var router = Router();

router.use("/crawler", Crawler);

export default router;
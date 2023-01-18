import { Router } from "express";
const crawler = Router();
import  Crawler  from "../controller/Crawler.js";

crawler.get("/fetch/", Crawler.fetch);
crawler.post("/webhook/", Crawler.hook);

export default crawler;
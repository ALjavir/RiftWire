import { Router } from "express";
import { getNews, getNewsById } from "../controllers/news_controller.js";

const router = Router();


router.route("/").get(getNews);
router.route("/:id").get(getNewsById);

export default router;

import asyncHandler from "express-async-handler";
import News from "../models/news_model.js";

export const getNews = asyncHandler(async (req, res) => {

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 9;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.search) {
        filter.$or = [
            { title: { $regex: req.query.search, $options: "i" } },
            { shortDescription: { $regex: req.query.search, $options: "i" } },
        ];
    }
    if (req.query.tag) filter.tags = req.query.tag;
    if (req.query.published) filter.published = req.query.published === "true";

    const [news, total] = await Promise.all([
        News.find(filter).sort({ date: -1 }).skip(skip).limit(limit),
        News.countDocuments(filter),
    ]);


    res.status(200).json({
        success: true,
        count: news.length,
        total,
        page,
        totalPages: Math.ceil(total / limit),
        data: news,
    });
});


export const getNewsById = asyncHandler(async (req, res) => {
    const article = await News.findById(req.params.id);

    if (!article) {
        res.status(404);
        throw new Error("News article not found");
    }

    res.status(200).json({
        success: true,
        data: article,
    });
});
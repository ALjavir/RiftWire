import mongoose from "mongoose";


const contentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['paragraph', 'image', 'youtube', 'quote'],
    required: true, 
  },
  
  text: {
    type: String,
  },
   
  videoId: {
    type: String,
  },
  url: {
    type: String, 
  },

  author: {
    type: String,
    },
  caption: {
    type: String,
  } 
}, { _id: false });


const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    content: [contentBlockSchema],
    category: {
        type: String,
        required: true,
    }
});


export default mongoose.model("RiftWiredb", newsSchema, "news");
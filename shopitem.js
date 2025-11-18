import mongoose from "mongoose";

const ShopItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true }, 
    rating: { type: Number }, 
    description: { type: String },
    picture: { type: String }
  },
  {
    collection: "shop"   
  }
);

export default mongoose.model("ShopItem", ShopItemSchema);

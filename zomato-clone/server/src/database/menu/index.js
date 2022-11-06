import mongoose from "mongoose";

// Each restaurant will have collection/list of menus
const MenuSchema = new mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [{ type: mongoose.Types.ObjectId, ref: "foods" }],
      },
    ],
    recommended:[
        {
            type:mongoose.Types.ObjectId,
            ref:"foods",
            unique:true,
        }
    ]
  },
  {
    timestamps: true,
  }
);

export const MenuModel = mongoose.model("menus", MenuSchema);

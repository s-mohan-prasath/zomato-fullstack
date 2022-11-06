import express from 'express'
import AWS from 'aws-sdk'
import multer from 'multer'
import { ImageModel } from "../../database/allModels"
import {s3Upload} from '../../utils/s3'

const Router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

/**
 * Route    /:_id
 * Params   _id
 * Des      Getting image details
 * Access   Public
 * Method   GET
 */

 Router.get("/:_id",async (req, res) => {
    try {
        const _id = req.params._id;
        const image = await ImageModel.findById(_id);
        return res.status(200).json({image})

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/**
 * Route    /image/
 * Params   NONE
 * Des      Upload given image to s3-bucket and save image link to mongoDB
 * Access   Public
 * Method   POST
 */

 Router.post("/",upload.single("file"),async (req, res) => {
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket:"zomato-clone-smohanprasath",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            ACL:"public-read",
        }
        const uploadImage = await s3Upload(bucketOptions)
        const dbImage = await ImageModel.create(
          {
            images: [
              {Location: uploadImage.Location},
            ]
          }
        )
        return res.status(200).json({dbImage})

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

// OUTPUT FORMAT OF S3Upload
// {
//   "uploadImage": {
//       "ETag": "\"e6c376eeb78326f39cc8b38307f6cccc\"",
//       "Location": "https://zomato-clone-smohanprasath.s3.ap-south-1.amazonaws.com/vibe_with_tizon.jpg",
//       "key": "vibe_with_tizon.jpg",
//       "Key": "vibe_with_tizon.jpg",
//       "Bucket": "zomato-clone-smohanprasath"
//   }
// }




export default Router
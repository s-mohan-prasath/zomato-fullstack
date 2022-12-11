"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _multer = _interopRequireDefault(require("multer"));

var _allModels = require("../../database/allModels");

var _s = require("../../utils/s3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Router = _express.default.Router();

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage
});
/**
 * Route    /:_id
 * Params   _id
 * Des      Getting image details
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const image = await _allModels.ImageModel.findById(_id);
    return res.status(200).json({
      image
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
/**
 * Route    /image/
 * Params   NONE
 * Des      Upload given image to s3-bucket and save image link to mongoDB
 * Access   Public
 * Method   POST
 */

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const bucketOptions = {
      Bucket: "zomato-clone-smohanprasath",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read"
    };
    const uploadImage = await (0, _s.s3Upload)(bucketOptions);
    const dbImage = await _allModels.ImageModel.create({
      images: [{
        Location: uploadImage.Location
      }]
    });
    return res.status(200).json({
      dbImage
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}); // OUTPUT FORMAT OF S3Upload
// {
//   "uploadImage": {
//       "ETag": "\"e6c376eeb78326f39cc8b38307f6cccc\"",
//       "Location": "https://zomato-clone-smohanprasath.s3.ap-south-1.amazonaws.com/vibe_with_tizon.jpg",
//       "key": "vibe_with_tizon.jpg",
//       "Key": "vibe_with_tizon.jpg",
//       "Bucket": "zomato-clone-smohanprasath"
//   }
// }

var _default = Router;
exports.default = _default;
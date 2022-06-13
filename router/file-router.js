const Router = require("express").Router;
const router = new Router();
const { cloudinary } = require("../utils/cloudinary");

router.post("/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      // upload_preset: 'dev_setups',
    });
    
    res.json({ url: uploadResponse.secure_url });
  } catch (err) {
    console.error(err);
    res.json({ err: "Something went wrong" });
  }
});

module.exports = router;

const express = require("express");
const postController = require("../controller/post");
const validator = require("../validation/validation");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/post", validator.createPostValidation, postController.createPost);

module.exports = router;

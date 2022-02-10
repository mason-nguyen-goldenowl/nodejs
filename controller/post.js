const Post = require("../model/post");

exports.getPosts = async (req, res) => {
  const data = await Post.find();
  res.status(200).json({ data });
  res.end();
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save().then((result) => {
    res.status(200).json({
      post: result,
    });
  });
};

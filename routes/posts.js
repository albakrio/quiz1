const router = require('express').Router();
const knex = require("../db/client");

router.get('/', (req, res) => {

  knex
    .getAll()
    .orderBy("createdAt", "DESC")
    .then(posts => {
      res.render("posts", {
        posts: posts
      });
    });
});


router.get("/new", (req, res) => {
  res.render("new")
});

router.post('/', (req, res) => {
  if (req.cookies.username) {
    knex
      .new({
        username: req.cookies.username,
        content: req.body.content,
        image_url: req.body.image_url
      })
      .into("posts")
      .returning("*")
      .then(cluck => {
        res.redirect("/posts")
      })
  } else {
    res.redirect("/sign_in")

  }
})

module.exports = router
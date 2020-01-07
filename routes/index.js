const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('')
})

router.get("/sign_in", (req, res) => {
  res.render("sign_in")
})

router.post("/sign_in", (req, res) => {
  const MAX_AGE = new Date(Date.now() + 1000 * 60 * 60 * 24)
  res.cookie(
    "username",
    req.body.username, {
      expires: MAX_AGE
    }
  )
  res.redirect("/")
})

router.delete("/logout", (req, res) => {
  res.clearCookie("username")
  res.redirect("/")
})

module.exports = router
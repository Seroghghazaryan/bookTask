const Router = require('koa-router')
const router = new Router()
const AuthorController = require("../controller/author.controller")

router.prefix("/author")

router.get("/", AuthorController.getAuthors);
router.post("/", AuthorController.createAuthor);

module.exports = router



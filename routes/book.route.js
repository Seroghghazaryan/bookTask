const Router = require('koa-router')
const router = new Router()
const BookController = require("../controller/book.controller")

router.prefix("/book")

router.get("/", BookController.getBook);
router.post("/", BookController.createBook);

module.exports = router
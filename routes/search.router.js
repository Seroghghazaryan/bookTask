const Router = require('koa-router')
const router = new Router()
const SearchController = require("../controller/search.controller")

router.prefix("/search")

router.get("/", SearchController.globalSearch);

module.exports = router
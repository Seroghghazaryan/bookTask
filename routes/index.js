const Router = require('koa-router');
const router = new Router();

const authorRoutes = require("./author.route")
const bookRoutes = require("./book.route")
const searchRoutes = require("./search.router");

router.use(bookRoutes.routes())
router.use(authorRoutes.routes())
router.use(searchRoutes.routes())

module.exports = router
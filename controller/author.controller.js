const AuthorService = require("../services/author.service")

class AuthorController {
    /**
     * @param ctx
     * @returns {Promise<void>}
     */
    async getAuthors(ctx) {
        ctx.body = await AuthorService.getAuthor();
        ctx.status = 200;
    }

    /**
     * @param ctx
     * @returns {Promise<void>}
     */
    async createAuthor(ctx) {
        const {name, surName} = ctx.request.body;
        const author = await AuthorService.createAuthor({name, surName})

        ctx.body = author
        ctx.status = 200;
    }
}

module.exports = new AuthorController()
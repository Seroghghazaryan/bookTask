const AuthorService = require("../services/author.service")

class AuthorController {
    async getAuthors(ctx) {
        ctx.body = await AuthorService.getAuthor();
        ctx.status = 200;
    }

    async createAuthor(ctx) {
        const {name, surName} = ctx.request.body;
        const author = await AuthorService.createAuthor({name, surName})

        ctx.body = author
        ctx.status = 200;
    }
}

module.exports = new AuthorController()
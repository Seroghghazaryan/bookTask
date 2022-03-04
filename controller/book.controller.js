const BookService = require("../services/book.service");
const AuthorService = require('../services/author.service');

class BookController {
    getBook() {

    }

    async createBook(ctx) {
        const {name, pages, AuthorId} = ctx.request.body;
        const author = await AuthorService.getCurrentAuthor(AuthorId);
        if(!author){
           throw new Error('Author doesnt exist', 404)
        }
        ctx.body = await BookService.createBook({name, pages, AuthorId});
        ctx.status = 200;
    }
}

module.exports = new BookController()
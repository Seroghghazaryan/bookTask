const Book = require("../models/book.models")

class BookService {
    getBook() {

        return Book.findByPk();
    }

   async createBook(book) {
        const newBook = await Book.create(book);
        if (!newBook) {
            throw new Error('Book does not created', 400);
        }
        return newBook
    }
}

module.exports = new BookService()

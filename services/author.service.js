const Author = require("../models/author.model")
const Book = require("../models/book.models")

class AuthorService {
    getAuthor() {
        return Author.findAll({
            include:[{
                model:Book,
                required:true
            }]
        })

    }

    createAuthor(body) {
        const author = Author.create(body);
        if (!author) {
            throw new Error('Author does not created', 400);
        }
        return author
    }

    async getCurrentAuthor(id) {
        return Author.findOne({
            where: {
                id
            }
        })
    }
}

module.exports = new AuthorService()
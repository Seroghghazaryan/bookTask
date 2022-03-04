const BookModel = require('../models/book.models');
const AuthorModel = require('../models/author.model');
const {Op} = require("sequelize");
class SearchService {
    static async getResultBYQueryParams({limit, pages, ...queries}){
         if(pages) {
             pages = {
                 pages: {
                     [Op.lt]: pages
                 }
             }
         }else {
                 pages =  {}
         }
        return BookModel.findAll({
            where: {
                ...queries,
               ...pages,
            },
            limit,
            include: [{
                model: AuthorModel,
                required: false
            }]
        })
    }
}
module.exports = SearchService;
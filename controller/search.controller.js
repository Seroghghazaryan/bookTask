const searchQueriesValidation = require('../helper/searchQueriesValidation');
const SearchService = require('../services/search.service');

class SearchController {
    static async globalSearch(ctx){
        const queries = ctx.query;
        if(searchQueriesValidation(queries)){
            ctx.body = await SearchService.getResultBYQueryParams(queries);
            ctx.status = 200;
        }
    }
}
module.exports = SearchController;
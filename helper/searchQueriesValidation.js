module.exports = (params) => {
    if(!Object.keys(params).length) throw new Error('Empty query params')
    const validParams = {
        'author_id': true,
        'name': true,
        'pages': true,
        'limit': true,
    }
    const invalidParamsList = [];
    for(const item in params){
        if(!validParams[item]){
            invalidParamsList.push(item)
        }
    }
    if(invalidParamsList.length){
        throw new Error(`Invalid params items ${invalidParamsList.join(',')}`)
    }
    return true;
}
const Koa = require('koa')
const koaBody = require('koa-body');

const sequelize = require('./utils/pgDatabase');
const routes = require('./routes/index');

sequelize.options.logging = false

const app = new Koa()

app.use(koaBody({
    extendTypes: {
        json: ['application/json']
    },
}));


app.use(routes.routes());

const PORT = process.env.PORT || 3003

async function start() {
    try {
        await sequelize.sync({alter: true})
        app.listen(PORT)
        console.log('app run in port - ' + PORT);
    } catch (e) {
        console.log(e)
    }
}


start()
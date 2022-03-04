const Sequelize = require("sequelize")

const DB_NAME = "task-postgres"
const USER_NAME = "postgres"
const PASSWORD = "102030"

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize
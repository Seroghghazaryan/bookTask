const Sequelize = require("sequelize")
const sequelize = require("../utils/pgDatabase")
const authorModel = require("./author.model")

const bookModel = sequelize.define("Books", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pages : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

bookModel.belongsTo(authorModel);


module.exports = bookModel
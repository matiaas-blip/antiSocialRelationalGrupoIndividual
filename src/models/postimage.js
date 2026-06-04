const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const PostImage = sequelize.define("PostImage", {
    urlImagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = PostImage
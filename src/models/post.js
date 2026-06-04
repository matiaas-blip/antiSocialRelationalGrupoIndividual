const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Post = sequelize.define("Post", {
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 1000]
        }
    }
})

module.exports = Post
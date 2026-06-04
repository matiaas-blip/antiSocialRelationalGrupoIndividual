const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Tag = sequelize.define("Tag", {
    nnombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Tag
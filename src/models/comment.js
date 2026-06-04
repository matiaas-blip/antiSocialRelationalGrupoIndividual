const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Comment = sequelize.define("Comment", {
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 500]
        }
    },
    visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Comment
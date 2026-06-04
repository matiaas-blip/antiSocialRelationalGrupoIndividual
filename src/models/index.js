const sequelize = require("../config/database")

const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")
const Tag = require("./Tag")
const PostImage = require("./PostImage")

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

Post.hasMany(PostImage)
PostImage.belongsTo(Post)

Post.belongsToMany(Tag, { through: "PostTags" })
Tag.belongsToMany(Post, { through: "PostTags" })

module.exports = {
    sequelize,
    User,
    Post,
    Comment,
    Tag,
    PostImage
}

User.belongsToMany(User, {
    through: "Seguidores",
    as: "seguir",
    foreignKey: "seguidorId",
    otherKey: "siguiendoId"
})

User.belongsToMany(User, {
    through: "Seguidores",
    as: "seguidores",
    foreignKey: "siguiendoId",
    otherKey: "seguidorId"
})
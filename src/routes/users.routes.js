const express = require("express")
const { User } = require("../models")

const router = express.Router()

router.get("/", async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)

    if (!user) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        })
    }

    res.json(user)
})

router.post("/", async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async (req, res, next) => {
    try {

        const user = await User.findByPk(req.params.id)

        if (!user) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            })
        }

        await user.update(req.body)

        res.json(user)

    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {

        const user = await User.findByPk(req.params.id)

        if (!user) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            })
        }

        await user.destroy()

        res.json({
            message: "Usuario eliminado"
        })

    } catch (error) {
        next(error)
    }
})

router.post("/:id/seguir/:objetivoId", async (req, res) => {

    const usuario = await User.findByPk(req.params.id)
    const objetivo = await User.findByPk(req.params.objetivoId)

    if (!usuario || !objetivo) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        })
    }

    await usuario.addSeguir(objetivo)

    res.json({
        mensaje: `${usuario.usuario} ahora sigue a ${objetivo.usuario}`
    })
})

router.get("/:id/seguir", async (req, res) => {

    const usuario = await User.findByPk(req.params.id, {
        include: {
            association: "seguir"
        }
    })

    if (!usuario) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        })
    }

    res.json(usuario.seguir)
})

router.get("/:id/seguidores", async (req, res) => {

    const usuario = await User.findByPk(req.params.id, {
        include: {
            association: "seguidores"
        }
    })

    if (!usuario) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        })
    }

    res.json(usuario.seguidores)
})

module.exports = router
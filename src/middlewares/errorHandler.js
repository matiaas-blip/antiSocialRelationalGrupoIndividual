function errorHandler(err, req, res, next) {

    console.error(err)

    if (err.name === "SequelizeValidationError") {

        return res.status(400).json({
            error: "Error de validación",
            detalles: err.errors.map(e => e.message)
        })
    }

    if (err.name === "SequelizeUniqueConstraintError") {

        return res.status(400).json({
            error: "Ya existe un registro con esos datos"
        })
    }

    return res.status(500).json({
        error: "Error interno del servidor"
    })
}

module.exports = errorHandler
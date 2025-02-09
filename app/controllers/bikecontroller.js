const Bike = require('../models/bike')

const BikeController = {
    async index(req, res) {
        try {
            BikeController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const bikes = await Bike.findAll()
        res.status(200)
        res.json({
            success: true,
            data: bikes
        })
    },
    async create(req, res) {
        try {
            BikeController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const bike = {
            name: req.body.name,
            wheel: req.body.wheel,
            usage: req.body.usage,
            price: req.body.price
        }
        await Bike.create(bike)
        .then( result => {
            res.status(201)
            res.json({
                succes: true,
                data: result
            })
        })
    },
    async show(req, res) {
        try {
            BikeController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const bike = await Bike.findOne({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: bike
        })
    },
    async update(req, res) {
        try {
            BikeController.tryUpdate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryUpdate(req, res) {
        const bike = {
            name: req.body.name,
            wheel: req.body.wheel,
            usage: req.body.usage,
            price: req.body.price
        }
        await Bike.update(bike, {
            where: { id: req.params.id }
        })
        .then( result => {
            res.status(201)
            res.json({
                succes: true,
                data: result
            })
        })
    },
    async destroy(req, res) {
        try {
            BikeController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        await Bike.destroy({
            where: { id: req.params.id }
        })
        .then( result => {
            res.status(201)
            res.json({
                succes: true,
                data: result
            })
        })
    }
}

module.exports = BikeController

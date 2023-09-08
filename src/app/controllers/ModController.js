
const Mods = require('../models/Mods')

class ModsController {
    async api (req, res) {
        const mods = await Mods.find({})
        res.json(mods)
    }

    async insert (req, res) {
        try {
            let arr = []
            const data = req.body
            req.files.forEach(item => {
                arr.push(item.path)
            }) 
            const arr1 = data.linkDownload.split('!');

            const mods = new Mods(data)
            mods.images = arr
            mods.linkDownload = arr1

            await mods.save()
            res.json({status : 200})
        } catch (error) {
            res.json({status : 404})
        }
    }

    async delete (req, res) {
        try {
            const id = req.body.id
            await Mods.deleteOne({_id : id})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }

    async update (req, res) {
        try {
            await Mods.updateOne({_id : req.body.id},{title : req.body.title, originGame : req.body.originGame, criteria : req.body.criteria, images : req.body.images, video : req.body.video, linkDownload : req.body.linkDownload, description : req.body.description})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }

    async updateDownloads (req, res) {
        try {
            await Mods.updateOne({title : req.body.title},{downloads : req.body.downloads})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }

    async updateViews (req, res) {
        try {
            await Mods.updateOne({title : req.body.title},{views : req.body.views})
            res.json({status : 200})
        } catch (error) {
            res.json({status : 500})
        }
    }

    async findById (req, res) {
        try {
            const mod = await Mods.findById(req.query.id)
            res.json(mod)
        } catch (error) {
            res.json({status : 500})
        }
    }


    async findByOrigin (req, res) {
        try {
            const mod = await Mods.find({originGame : req.query.origin})
            res.json(mod)
        } catch (error) {
            res.json({status : 500})
        }
    }

    async findByOrigin_Criteria (req, res) {
        try {
            const mod = await Mods.find({originGame : req.query.origin, criteria : req.query.criteria})
            res.json(mod)
        } catch (error) {
            res.json({status : 500})
        }
    }
}

module.exports = new ModsController
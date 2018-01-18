const User = require('../models/user')

module.exports = {

  index: async (req, res, next) => {
    let docs = await User.find({})
    res.status(200).json(docs)
  },

  add: async (req, res, next) => {
    let data = new User(req.body)
    let doc = await data.save()
    res.status(200).json(doc)
  },

  getOne: async (req, res, next) => {
    let {_id} = req.params
    let doc = await User.findById(_id)
    res.status(200).json(doc)
  },

  replace: async (req, res, next) => {
    let {_id} = req.params
    let data = req.body
    let oldData = await User.findByIdAndUpdate(_id, data)
    res.status(200).json({success: true})
  },

  update: async (req, res, next) => {
    let {_id} = req.params
    let data = req.body
    let oldData = await User.findByIdAndUpdate(_id, data)
    res.status(200).json({success: true})
  }

}

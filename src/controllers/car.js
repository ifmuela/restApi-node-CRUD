const Car = require('../models/car'),
      User = require('../models/user')

module.exports = {

  index: async (req, res, next) => {
    let docs = await Car.find({})
    res.status(200).json(docs)
  },

  // add: async (req, res, next) => {
  //   let data = new Car(req.body)
  //   let doc = await data.save()
  //   res.status(200).json(doc)
  // },

  getOne: async (req, res, next) => {
    let {id} = req.params
    let doc = await Car.findById(id)
    res.status(200).json(doc)
  },

  replace: async (req, res, next) => {
    let {id} = req.params
    let data = req.body
    let oldData = await Car.findByIdAndUpdate(id, data)
    res.status(200).json({success: true})
  },

  update: async (req, res, next) => {
    let {id} = req.params
    let data = req.body
    let oldData = await Car.findByIdAndUpdate(id, data)
    res.status(200).json({success: true})
  },

  remove: async (req, res, next) => {
    let {id} = req.params
    await Car.findByIdAndRemove(id)
    res.status(200).json({success: true})
  },

  getUserCars: async (req, res, next) => {
    let {id} = req.params
    let doc = await User.findById(id).populate('cars')
    res.status(200).json(doc)
  },

  newUserCar: async (req, res, next) => {
    let {id} = req.params
    let newCar = new Car(req.body)
    let user = await User.findById(id)
    newCar.seller = user
    await newCar.save()
    user.cars.push(newCar)
    await user.save()
    res.status(201).json(newCar)
  }

}

// const router = require('express-promise-router')()
const express = require('express'),
      router = express.Router()

const {
  index,
  // add,
  getOne,
  update,
  remove,
  getUserCars,
  newUserCar
} = require('../controllers/car')

router.get('/', index)
router.get('/:id', getOne)
// router.post('/', add)
router.put('/:id', update)
router.delete('/:id', remove)
router.get('/:id/cars', getUserCars)
router.post('/:id/cars', newUserCar)




module.exports = router

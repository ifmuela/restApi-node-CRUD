const router = require('express-promise-router')()

const {
  index
} = require('../controllers/user')

router.get('/', index)

module.exports = router

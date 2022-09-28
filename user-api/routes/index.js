const express = require('express');
const { CreateUser } = require('../middlewares/create-user.middleware');
const { response } = require('../middlewares/response/response.middleware');
const { validateUser } = require('../middlewares/validations/validate-user.middleware');
const router = express.Router();

router.
  route('/create-user')
  .post(
    validateUser,
    CreateUser,
    response
  )


module.exports = router;

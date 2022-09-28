var express = require('express');
var router = express.Router();
const { createUser } = require('../middlewares/create-user.middleware');
const { loginUser } = require('../middlewares/login-user.middleware');
const { response } = require('../middlewares/response/response.middleware');
const { validateTokenMiddleware } = require('../middlewares/validate-token.middleware');
const { tokenValidation } = require('../middlewares/validations/token-validation.middlewre');
const { userValidation } = require('../middlewares/validations/user-validation.middleware');

/* GET home page. */
router
  .route('/login-user')
    .get(
      tokenValidation,
      validateTokenMiddleware,
      response
    )
    .post(
      userValidation,
      loginUser,
      response
    );
router
  .route('/create-user')
    .post(
      userValidation,
      createUser,
      response
    );

module.exports = router;

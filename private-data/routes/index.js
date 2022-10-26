var express = require('express');
const { fakeDataMiddleware } = require('../middlewares/fake-data.middleware');
const { response } = require('../middlewares/responses/response.middleware');
const { validateTokenMiddleware } = require('../middlewares/validate-token.middleware');
const { tokenValidation } = require('../middlewares/validations/token-validation.middlewre');
var router = express.Router();

router
  .route('/private-data')
    .get(
      tokenValidation,
      validateTokenMiddleware,
      // fakeDataMiddleware,
      response
    );

module.exports = router;

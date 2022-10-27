import express, { Router } from 'express';
import {
  createUser,
  loginUser,
  tokenValidation,
  userValidation,
  validateTokenMiddleware,
  response
} from '../middlewares';

const router: Router = express.Router();

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

export { router as credentialsRouter }

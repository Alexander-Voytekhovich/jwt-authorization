const Router = require('express');
const { body } = require('express-validator');

const userController = require('../controllers/user.controller');

const router = Router();

router.post('/registration', 
  body('email').isEmail(),
  body('password').isLength({min: 6, max: 12}),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.loguot);

router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;

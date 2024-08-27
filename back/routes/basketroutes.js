const router = require('express').Router();
const { checkBasket } = require('../controllers/basket');

router.post('/check', checkBasket);

module.exports = router;

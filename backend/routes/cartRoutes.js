const express = require('express');
const { getCart, updateCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/', getCart);
router.post('/', updateCart);

module.exports = router;

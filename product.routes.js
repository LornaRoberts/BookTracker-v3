const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.start);

router.get('/entry', product_controller.entry);


router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/:book', product_controller.product_details);

router.put('/:book/update', product_controller.product_update);

router.delete('/:book/delete', product_controller.product_delete);

module.exports = router;


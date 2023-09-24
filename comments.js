// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Path: /comment/
router.get('/', commentController.index);

// Path: /comment/new
router.get('/new', commentController.new);

// Path: /comment/create
router.post('/create', commentController.create);

// Path: /comment/:id
router.get('/:id', commentController.show);

// Path: /comment/:id/edit
router.get('/:id/edit', commentController.edit);

// Path: /comment/:id/update
router.put('/:id', commentController.update);

// Path: /comment/:id/destroy
router.delete('/:id', commentController.destroy);

module.exports = router;
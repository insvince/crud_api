import express from 'express';
import bookController from '../controllers/book.js';

const router = express.Router();

/* ADD BOOK */
router.post('/', bookController.addABook);

/* GET ALL BOOKS */
router.get('/', bookController.getAllBooks);

/* GET BOOK */
router.get('/:id', bookController.getABook);

/* UPDATE BOOK */
router.put('/:id', bookController.updateBook);

/* DELETE BOOK */
router.delete('/:id', bookController.deleteBook);

export default router;

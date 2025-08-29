const express = require('express');
const {
  getQuotes,
  submitQuote,
  upvoteQuote,
  downvoteQuote,
  deleteQuote,
} = require('../controllers/quoteController');

const router = express.Router();

router.get('/', getQuotes);
router.post('/', submitQuote);
router.put('/:id/upvote', upvoteQuote);
router.put('/:id/downvote', downvoteQuote);
router.delete('/:id', deleteQuote);

module.exports = router;


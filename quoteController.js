
let quotes = [];
let id = 1;

exports.getQuotes = (req, res) => {
  res.json(quotes);
};

exports.submitQuote = (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) return res.status(400).json({ error: 'Text and author are required' });

  const newQuote = { id: id++, text, author, votes: 0 };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
};

exports.upvoteQuote = (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === quoteId);
  if (!quote) return res.status(404).json({ error: 'Quote not found' });

  quote.votes++;
  res.json(quote);
};

exports.downvoteQuote = (req, res) => {
  const quoteId = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === quoteId);
  if (!quote) return res.status(404).json({ error: 'Quote not found' });

  quote.votes--;
  res.json(quote);
};

exports.deleteQuote = (req, res) => {
  const quoteId = parseInt(req.params.id);
  quotes = quotes.filter(q => q.id !== quoteId);
  res.status(204).send();
};

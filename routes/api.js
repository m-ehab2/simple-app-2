const express = require('express');
const router = express.Router();

// GET all items
router.get('/items', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

// GET item by ID
router.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json({ id, name: `Item ${id}` });
});

// POST new item
router.post('/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({
    message: 'Item created successfully',
    item: newItem
  });
});

module.exports = router;
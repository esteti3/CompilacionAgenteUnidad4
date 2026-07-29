import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Users route', users: [] });
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'User created', user: _req.body });
});

export default router;

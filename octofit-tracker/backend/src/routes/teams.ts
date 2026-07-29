import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Teams route', teams: [] });
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Team created', team: _req.body });
});

export default router;

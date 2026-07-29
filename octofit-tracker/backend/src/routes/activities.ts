import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Activities route', activities: [] });
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Activity created', activity: _req.body });
});

export default router;

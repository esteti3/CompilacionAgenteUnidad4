import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Workouts route', workouts: [] });
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Workout created', workout: _req.body });
});

export default router;

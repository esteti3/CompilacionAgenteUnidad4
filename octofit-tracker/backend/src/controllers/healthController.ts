export const getHealth = (_req: any, res: any) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
};

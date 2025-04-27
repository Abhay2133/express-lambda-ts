import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({message: "Server running :]"});
});

export default app;

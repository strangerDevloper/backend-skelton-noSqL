import 'dotenv/config'; // Load environment variables from .env
import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from .env

app.get('/', (req, res) => {
  res.send('Hello, environment variables!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
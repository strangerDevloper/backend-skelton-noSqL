import "dotenv/config"; // Load environment variables from .env
import express, { Request, Response } from 'express';
import cors from "cors";

import  Database from "./config/db";

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from .env

app.use(express.json({ limit: '50mb' })); // Middleware to parse JSON bodies
app.use(cors());
app.options('*', cors());

// Initialize database connection when the application starts
Database.getDb()
  .then(() => {
    console.log('Database connection established');
    app.listen(port, () => {  // Start the Express server
      console.log(`Server is running on http://localhost:${port}`);
    });
  })            
  .catch((err : any) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

app.get('/healthcheck', (req: Request, res: any) => {
  console.log("resques" , req.body)
  return res.status(200).json({
    message: 'Server is running',
  });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await Database.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await Database.close();
  process.exit(0);
});

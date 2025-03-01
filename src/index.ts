import "dotenv/config"; // Load environment variables from .env
import express from "express";
import cors from "cors";

import db from "./utils/db";

const app = express();
const port = process.env.PORT || 3000; // Use the PORT variable from .env

app.use(express.json({ limit: '50mb' })); // Middleware to parse JSON bodies
app.use(cors());
app.options('*', cors());

// Initialize database connection when the application starts
db.getDb()
  .then(() => {
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

app.get("/healthcheck", (req, res) => {
  res.status(200).json({ 
    message: "Server is running" 
  });
  console.log("achdbchdbh")
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await db.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await db.close();
  process.exit(0);
});

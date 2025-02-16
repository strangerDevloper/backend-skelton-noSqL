import { MongoClient, Db } from "mongodb";

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017"; // MongoDB connection string
const dbName = process.env.DB_NAME || "mydb"; // Database name

class Database {
  private static instance: Database;
  private client: MongoClient;
  private db: Db | null = null;
  private isConnecting: boolean = false;

  private constructor() {
    this.client = new MongoClient(uri);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async getDb(): Promise<Db> {
    if (this.db) {
      return this.db; // Return the existing connection
    }

    if (this.isConnecting) {
      // If a connection is already being established, wait for it
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          if (this.db) {
            clearInterval(interval);
            resolve(this.db);
          }
        }, 100);
      });
    }

    // Initialize the connection
    this.isConnecting = true;
    try {
      await this.client.connect();
      this.db = this.client.db(dbName);
      console.log("Connected to MongoDB");
      this.isConnecting = false;
      return this.db;
    } catch (err) {
      this.isConnecting = false;
      console.error("Failed to connect to MongoDB:", err);
      throw err;
    }
  }

  public async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.db = null;
      console.log("MongoDB connection closed");
    }
  }
}

export default Database.getInstance();

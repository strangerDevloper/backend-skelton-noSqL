import mongoose, { Connection, Mongoose } from 'mongoose';

const uri = process.env.DATABASE_URL || ''; // MongoDB connection string
const dbName = process.env.DB_NAME; // Database name

class Database {
  private static instance: Database;
  private mongooseInstance: Mongoose;
  private db: Connection | null = null;
  private isConnecting: boolean = false;

  private constructor() {
    this.mongooseInstance = mongoose;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

    public async getDb(): Promise<Connection> {
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
            await this.mongooseInstance.connect(uri, { dbName });
            this.db = this.mongooseInstance.connection;
            console.log('Connected to MongoDB via Mongoose');
            this.isConnecting = false;
            return this.db;
        } catch (err) {
            this.isConnecting = false;
            console.error('Failed to connect to MongoDB:', err);
            throw err;
        }
    }


    public async close(): Promise<void> {
        if (this.mongooseInstance) {
            await this.mongooseInstance.connection.close();
            this.db = null;
            console.log('MongoDB connection closed');
        }
    }
}

export default Database.getInstance();

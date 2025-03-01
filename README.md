### Pharmacy Management Backend



## Know before start
Before you begin to develop, make sure you have known something about these:

0. JavaScript
1. [Node.js](http://nodejs.org/api/)
2. [Express](https://expressjs.com/): node.js web application framework
3. [MongoDB](https://www.mongodb.com/)
   


### Folder structure
```
project-root/
├── node_modules/          # Node.js modules (ignored in version control)
├── src/                   # Source code
│   ├── config/            # Configuration files (e.g., database, environment variables)
│   │   └── db.ts          # MongoDB connection setup
│   ├── controllers/       # Controllers (handle request logic)
│   │   └── userController.ts
│   ├── models/            # MongoDB models (Mongoose schemas)
│   │   └── userModel.ts
│   ├── routes/            # Routes (define API endpoints)
│   │   └── userRoutes.ts
│   ├── services/          # Business logic (optional, for complex apps)
│   │   └── userService.ts
│   ├── types/             # Custom TypeScript types/interfaces
│   │   └── userTypes.ts
│   ├── utils/             # Utility functions (e.g., helpers, validators)
│   │   └── authUtils.ts
│   └── index.ts          # Server entry point (starts the app)
├── .env                   # Environment variables
├── .gitignore             # Files/folders to ignore in version control
├── package.json           # Project dependencies and scripts
├── pnpm-lock.yaml         # pnpm lock file
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```


**Explanation of Key Directories:**

* **`src/`**: Contains all the application's source code.
* **`src/config/`**: Stores configuration files, such as database connection details and environment settings.
* **`src/controllers/`**: Handles request logic and interacts with services/models.
* **`src/models/`**: Defines data models using Mongoose schemas for MongoDB.
* **`src/routes/`**: Defines API endpoints and routes requests to controllers.
* **`src/services/`**: (Optional) Contains business logic for complex applications.
* **`src/types/`**: Defines custom TypeScript types and interfaces.
* **`src/utils/`**: Stores utility functions, helpers, and validators.
* **`src/index.ts`**: The server's entry point, which starts the application.
* **`.env`**: Stores environment variables (should not be committed to version control).
* **`node_modules/`**: Contains installed Node.js packages (ignored in `.gitignore`).
* **`package.json`**: Manages project dependencies and scripts.
* **`pnpm-lock.yaml`**: Ensures consistent dependency versions.
* **`tsconfig.json`**: Configures the TypeScript compiler.


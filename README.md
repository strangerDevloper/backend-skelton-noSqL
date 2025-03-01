### Pharmacy Management Backend



## Know before start
Before you begin to develop, make sure you have known something about these:

0. JavaScript
1. [Node.js](http://nodejs.org/api/)
2. [Express](https://expressjs.com/): node.js web application framework
3. [MongoDB](https://www.mongodb.com/)
   


### Folder structure
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


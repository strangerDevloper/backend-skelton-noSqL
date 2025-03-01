// src/routes/userRoutes.ts
import express from 'express';
import { getUsers } from '../controllers/userController';

const router = express.Router();

router.get('/users', getUsers);

export default router;
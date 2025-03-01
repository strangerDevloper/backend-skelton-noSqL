// src/services/userService.ts
import User from '../models/userModel';

export const fetchUsers = async () => {
  return await User.find();
};
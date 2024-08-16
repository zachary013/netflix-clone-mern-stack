import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js'

const router = express.Router();

export default router;

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
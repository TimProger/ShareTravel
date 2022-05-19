import express, { Router } from 'express';
import { register, login, token } from '../controllers/auth.controller';

const router: Router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/token', token);

export default router;
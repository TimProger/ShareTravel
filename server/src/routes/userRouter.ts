import {Router} from "express";
const router = Router();
import userController from '../controllers/userController';

router.get('/getUsers', userController.getUsers)
router.post('/registration', userController.registration)
router.get('/login', userController.login)

export default router;
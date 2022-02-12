import {Router} from "express";
const router = Router();
import postController from '../controllers/postController';

router.get('/getPosts', postController.getPosts)
router.post('/addPost', postController.addPost)

export default router;
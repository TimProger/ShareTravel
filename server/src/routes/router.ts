import {Router, Request, Response } from "express";
import userRouter from "./userRouter";
import postRouter from "./postRouter";
import mysql from "mysql2";
const router = Router()

router.use('/user', userRouter)
router.use('/post', postRouter)

export default router
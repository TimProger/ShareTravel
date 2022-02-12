require('dotenv').config()
import { Request, Response } from "express";
import mysql, {RowDataPacket} from "mysql2/promise";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const secret: string | number = process.env.SECRET_KEY || 'cat'

const generateJwt = (id: number, email: string) => {
    return jwt.sign(
        {id, email},
        secret,
        {expiresIn: '2440h'}
    )
}

class postController {
    static async addPost(req: Request, res: Response){
        const { name, text, author_id } = req.body

        const pool = await mysql.createPool({
            connectionLimit: 5,
            host: "127.0.0.1",
            user: "root",
            database: "ShareTravel",
            password: process.env.PASS
        });

        let sql2: string = `INSERT INTO Post(Post_Name, Post_Title, Post_Author)
                            VALUES (?, ?, ?);`
        await pool.query(sql2, [name, text, author_id])
            .then(([rows, fields]: Array<any>)=>{
                res.send('Успех!')
            })
            .catch((err)=>{
                res.send('Произошла ошибка: ' + err)
            });
        pool.end()

    }

    static async getPosts(req: Request, res: Response){
        const { id } = req.body
        const pool = await mysql.createPool({
            connectionLimit: 5,
            host: "127.0.0.1",
            user: "root",
            database: "ShareTravel",
            password: process.env.PASS
        });
        await pool.query("SELECT * FROM Post WHERE Post_Author = ?", [id])
        .then(([rows, fields])=>{
            res.send(rows)
        })
        .catch((err)=>{
            res.send('Произошла ошибка: ' + err)
        });
        pool.end()
    }
}

export default postController
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

class userController {
    static async registration(req: Request, res: Response){
        const {email, name, age, password} = req.body
        const pool = await mysql.createPool({
            connectionLimit: 5,
            host: "127.0.0.1",
            user: "root",
            database: "ShareTravel",
            password: process.env.PASS
        });

        let sql1 = `SELECT * FROM User WHERE User_E_Mail = ?`
        const user = await pool.query(sql1, [email])
            .then(([rows, fields]: Array<any>)=>{
                if(rows.length > 0){
                    res.send('Пользователь с такой почтой уже существует; 0')
                    // Позже на фронте будем сплитить и по числу в конце строки выбирать действия
                    pool.end()
                }else {
                    return false
                }
            })
            .catch(err=>res.send('Произошла ошибка '+err));
        if(!user){
            const hashPassword = await bcrypt.hash(password, 5)
            let sql2: string = `INSERT INTO User(User_E_Mail, User_Name, User_Age, User_Password) 
                                VALUES (?, ?, ?, ?);`
            await pool.query(sql2, [email, name, age, hashPassword])
                .then(([rows, fields]: Array<any>)=>{
                    const token = generateJwt(rows.insertId, email)
                    console.log(rows)
                    res.send(token)
                })
                .catch((err)=>{
                    res.send('Произошла ошибка: ' + err)
                });
            pool.end()
        }
    }

    static async login(req: Request, res: Response){
        const {email, password} = req.body
        const pool = await mysql.createPool({
            connectionLimit: 5,
            host: "127.0.0.1",
            user: "root",
            database: "ShareTravel",
            password: process.env.PASS
        });
        let sql: string = "SELECT * FROM User WHERE User_E_Mail = ?"
        await pool.query(sql, [email])
              .then(([rows, fields]: Array<any>)=>{
                  if(bcrypt.compareSync(password, rows[0]['User_Password'])){
                      res.send(rows[0])
                  }else{
                      res.send('Fail')
                  }
              })
              .catch((err)=>{
                  res.send('Произошла ошибка: ' + err)
              });
        pool.end()
    }

    static async getUsers(req: Request, res: Response){
        const pool = mysql.createPool({
            connectionLimit: 5,
            host: "127.0.0.1",
            user: "root",
            database: "ShareTravel",
            password: process.env.PASS
        });
        pool.query("SELECT * FROM User", function(err: any, data:RowDataPacket[]) {
            if(err) return console.log(err);
            res.send(data)
        });
        pool.end()
    }
}

export default userController
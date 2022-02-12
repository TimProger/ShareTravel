"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const promise_1 = __importDefault(require("mysql2/promise"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_KEY || 'cat';
const generateJwt = (id, email) => {
    return jsonwebtoken_1.default.sign({ id, email }, secret, { expiresIn: '2440h' });
};
class postController {
    // static async registration(req: Request, res: Response){
    //     const {email, name, age, password} = req.body
    //     const pool = await mysql.createPool({
    //         connectionLimit: 5,
    //         host: "127.0.0.1",
    //         user: "root",
    //         database: "ShareTravel",
    //         password: process.env.PASS
    //     });
    //
    //     let sql1 = `SELECT * FROM User WHERE User_E_Mail = ?`
    //     const user = await pool.query(sql1, [email])
    //         .then(([rows, fields]: Array<any>)=>{
    //             if(rows.length > 0){
    //                 res.send('Пользователь с такой почтой уже существует; 0')
    //                 // Позже на фронте будем сплитить и по числу в конце строки выбирать действия
    //                 pool.end()
    //             }else {
    //                 return false
    //             }
    //         })
    //         .catch(err=>res.send('Произошла ошибка '+err));
    //     if(!user){
    //         const hashPassword = await bcrypt.hash(password, 5)
    //         let sql2: string = `INSERT INTO User(User_E_Mail, User_Name, User_Age, User_Password)
    //                             VALUES (?, ?, ?, ?);`
    //         await pool.query(sql2, [email, name, age, hashPassword])
    //             .then(([rows, fields]: Array<any>)=>{
    //                 const token = generateJwt(rows.insertId, email)
    //                 console.log(rows)
    //                 res.send(token)
    //             })
    //             .catch((err)=>{
    //                 res.send('Произошла ошибка: ' + err)
    //             });
    //         pool.end()
    //     }
    //
    // }
    //
    // static async login(req: Request, res: Response){
    //     const {email, password} = req.body
    //     const pool = await mysql.createPool({
    //         connectionLimit: 5,
    //         host: "127.0.0.1",
    //         user: "root",
    //         database: "ShareTravel",
    //         password: process.env.PASS
    //     });
    //     let sql: string = "SELECT * FROM User WHERE User_E_Mail = ?"
    //     await pool.query(sql, [email])
    //           .then(([rows, fields]: Array<any>)=>{
    //               if(bcrypt.compareSync(password, rows[0]['User_Password'])){
    //                   res.send(rows[0])
    //               }else{
    //                   res.send('Fail')
    //               }
    //           })
    //           .catch((err)=>{
    //               res.send('Произошла ошибка: ' + err)
    //           });
    //     pool.end()
    // }
    static getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body.id;
            const pool = promise_1.default.createPool({
                connectionLimit: 5,
                host: "127.0.0.1",
                user: "root",
                database: "ShareTravel",
                password: process.env.PASS
            });
            pool.query("SELECT * FROM Post WHERE Post_Author = ?", [id])
                .then((r) => {
                res.send(r);
            })
                .catch((err) => {
                res.send('Произошла ошибка: ' + err);
            });
            pool.end();
        });
    }
}
exports.default = postController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersdb", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});
exports.default = sequelize;

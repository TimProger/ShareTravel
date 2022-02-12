"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController_1 = __importDefault(require("../controllers/userController"));
router.get('/getUsers', userController_1.default.getUsers);
router.post('/registration', userController_1.default.registration);
router.get('/login', userController_1.default.login);
exports.default = router;

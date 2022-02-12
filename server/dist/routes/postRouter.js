"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const postController_1 = __importDefault(require("../controllers/postController"));
router.get('/getPosts', postController_1.default.getPosts);
exports.default = router;

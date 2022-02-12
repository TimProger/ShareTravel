"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DialogueController = require('../controllers/userController');
const router = (0, express_1.Router)();
router.post('/sendMessage', DialogueController.sendMessage);
router.get('/getMessages', DialogueController.getMessages);
exports.default = router;

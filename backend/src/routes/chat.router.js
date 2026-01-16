import express from "express";
const router =express.Router();
import {getChat} from "../controllers/chat.controller"
router.get("/:id",getChat);


export default router;
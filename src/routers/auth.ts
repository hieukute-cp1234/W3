import { Router } from "express";
import { authController } from "../controllers";

const router = Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login with email
 *     description: Requires email and password for authentication.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: hieukutecp@gmail.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: yourpassword123
 *     responses:
 *       200:
 *         description: Successfully authenticated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *               example:
 *                 _id: 66f2205a144951aec62b390c
 *                 name: Hieu Hieu
 *                 email: hieukutecp@gmail.com
 *                 token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Unauthorized - Incorrect email or password
 */

router.get("/login", authController.handleLogin);

export default router;

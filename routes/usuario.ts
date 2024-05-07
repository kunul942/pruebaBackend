import { Router } from "express";
import { getUsuarios } from "../controllers/usuario";

const router = Router()

router.get('/', getUsuarios) // Ruta para obtener todos los usuarios



export default router
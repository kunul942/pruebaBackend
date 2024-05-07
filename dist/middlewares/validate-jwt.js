"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => {
    //*x-token headers
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    //*validate token
    try {
        const { nombre } = jsonwebtoken_1.default.verify(token, process.env.SECRET_JWT_SEED || 'Esto_es_Una_Palabra_Secreta');
        req.nombre = nombre;
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'token is not valid'
        });
    }
    next();
};
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.js.map
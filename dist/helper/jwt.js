"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (nombre) => {
    return new Promise((resolve, reject) => {
        const payload = { nombre };
        jsonwebtoken_1.default.sign(payload, process.env.SECRET_JWT_SEED || 'Esto_es_Una_Palabra_Secreta', {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=jwt.js.map
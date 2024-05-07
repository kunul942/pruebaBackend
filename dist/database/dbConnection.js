"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('pruebaBackend', 'pruebaTEC', '123', {
    host: 'localhost',
    dialect: 'mssql'
});
exports.default = db;
//# sourceMappingURL=dbConnection.js.map
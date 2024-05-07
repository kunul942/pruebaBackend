import { Sequelize } from 'sequelize';

const db = new Sequelize('pruebaBackend', 'pruebaTEC', '123', {
    host: 'localhost',
    dialect: 'mssql'
});

export default db
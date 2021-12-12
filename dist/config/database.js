"use strict";module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    pool: {
        max: 20,
        min: 1,
        idle: 10000,
    },
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },

}


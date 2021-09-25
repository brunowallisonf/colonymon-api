module.exports = {
    development: {
        dialect: 'postgres',
        host: "localhost",
        username: "postgres",
        password: "88130279",
        database: "colonymon",
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
    },
}


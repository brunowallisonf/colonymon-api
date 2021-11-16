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
    test: {
        dialect: 'postgres',
        host: "ec2-35-171-171-27.compute-1.amazonaws.com",
        username: "dqyoqequcsvhtv",
        password: "31aad17baf1facf4282107a23071ea0c2247e3d51b61efc5e4b1abdecc6873c8",
        database: "d5qirdplejsv9h",
        logging: false,

        pool: {
            max: 20,
            min: 1,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        },
        define: {
            timestamps: false,
            underscored: true,
            underscoredAll: true,
        },
    },
}


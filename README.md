# Colonymon Api

## Dependencies

- PostgreSQL
- NodeJS 14.x

### How to run

1 - Replace your PostgreSQL credentials on the file config/database.js and create a database called "colonymon"

2 - On the root project folder run: `yarn` or `npm install`

3 - After the step 2 run: `npx sequelize-cli db:migrate`

4 - In case of success run: `yarn dev` or `npm run dev` and wait for the logs that will be shown on the console indicating that the server is running and the database is connected

5 - In case of fail, please check your database credentials

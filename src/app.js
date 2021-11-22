import express from "express"
import "express-async-errors"
import "./database"
import routes from "./app/routes/index.routes"

class App {
    constructor() {
        this.server = express()
        this.middlewares();
        this.routes();
        this.exceptionHandler()
    }
    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }

    exceptionHandler() {
        this.server.use((error, req, res, next) => {
            console.log(error)
            if (!error.status) {
                error.status = 500;
                error.message = "An error ocurred"
            }
            return res.status(error.status).json({ error: error.message })

        })
    }
}

export default App;
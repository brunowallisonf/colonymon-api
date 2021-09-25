import "dotenv/config"
import App from "./app"

const server = new App().server


server.listen(process.env.PORT || 3333, () => {

    console.info(`Server listening on port ${process.env.PORT || 3333}`)
})
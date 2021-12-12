"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
require('./database');
var _indexroutes = require('./app/routes/index.routes'); var _indexroutes2 = _interopRequireDefault(_indexroutes);

class App {
    constructor() {
        this.server = _express2.default.call(void 0, )
        this.middlewares();
        this.routes();
        this.exceptionHandler()
    }
    middlewares() {
        this.server.use(_express2.default.json())
    }

    routes() {
        this.server.use(_indexroutes2.default)
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

exports. default = App;
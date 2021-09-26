"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const routes = _express.Router.call(void 0, );
var _SessionController = require('../controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

const sessionController = new (0, _SessionController2.default)()
routes.post("/", sessionController.store)

exports. default = routes;
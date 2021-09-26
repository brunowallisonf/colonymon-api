"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
const routes = _express.Router.call(void 0, );
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
const userController = new (0, _UserController2.default)()
routes.post("/",userController.store)


exports. default = routes;
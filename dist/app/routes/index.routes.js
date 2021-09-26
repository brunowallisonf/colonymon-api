"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _sessionroutes = require('./session.routes'); var _sessionroutes2 = _interopRequireDefault(_sessionroutes);
var _userroutes = require('./user.routes'); var _userroutes2 = _interopRequireDefault(_userroutes);
const routes = _express.Router.call(void 0, );

routes.use("/sessions", _sessionroutes2.default)
routes.use("/users", _userroutes2.default)

exports. default = routes;
"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const server = new (0, _app2.default)().server


server.listen(process.env.PORT || 3333, () => {

    console.info(`Server listening on port ${process.env.PORT || 3333}`)
})
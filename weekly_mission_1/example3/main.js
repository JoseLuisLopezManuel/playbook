/*
 Example 3: Diferentes formas de exportar funciones
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1.info('This is an informational message')
logger2.verbose('This is a verbose message')
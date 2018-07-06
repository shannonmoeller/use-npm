var fs = require('fs')
var path = require('path')
var isYarnNotNpm = /yarn/.test(process.env.npm_execpath || '');

function useNpm(message) {
  if (isYarnNotNpm && process.env.DISABLE_USE_NPM !== 'true') {
    message = message || fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8')
    console.error(message)
    process.exit(1)
  }
}

module.exports = useNpm

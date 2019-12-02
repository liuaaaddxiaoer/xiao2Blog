const process = require('child_process')

process.exec('npm run proc', function (err, stdout ,stderr) {
  console.log(stdout)
})

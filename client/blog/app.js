const process = require('child_process')

process.exec('npm run proc', function (err, stdout ,stderr) {
  console.log(stdout)
})

//    "highlight.js": "^9.16.2",
//    "highlightjs-line-numbers.js": "^2.7.0",

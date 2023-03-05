const {readFile , writeFile} = require('fs');

readFile('./folder/first.txt', 'utf8' ,(err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result;
  readFile('./folder/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
    }
    const second = result
    writeFile('./folder/result-async.txt', `here is the result: ${first}, ${second}`, (err,result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    })
  })
})
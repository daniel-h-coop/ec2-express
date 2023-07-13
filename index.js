const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  console.log({
    LogGroup: "ec2-express",
    Event: "invoke"
  })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const app = require('./app')

var port = 8080

if(process.env.NODE_ENV == "development") port = 3030
console.log(process.env.NODE_ENV);
app.listen(port)
console.log(`listening on http://localhost:${port}`)

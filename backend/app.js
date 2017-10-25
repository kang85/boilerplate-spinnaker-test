'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()

app.set('view engine', 'pug')
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(awsServerlessExpressMiddleware.eventContext())

const fs = require('fs')
const path = require('path')
import api from './api'

// set static path as public
app.use(express.static(path.join(__dirname, 'public')))
// set /api 
app.use('/api', api);

app.get('*', (req, res, next) => {
  const statics = ['static', 'thumbnails']
  const routes = ['api'];
  const firstPath = req.params[0].split('/')[1]
  console.log('req.params[0] : ', req.params[0]);
  console.log('firstPath : ', firstPath);
  
  // if route matches /api
  if(routes.indexOf(firstPath) !== -1) {
    console.log('route is /api')
    return next()
  }

  // if routes matches /static or /thumbnails
  if(statics.indexOf(firstPath) !== -1) {
    console.log('route is /static or /thumbnails')
    return next()
  }

  console.log('returning index.html.. the route is not either /api, /static or /thumbnails')

  let indexPage = ''
  if(firstPath == 'favicon.ico') {
    indexPage = fs.readFileSync( './public/favicon.ico', 'utf8')
    res.set('Content-Type', 'image/x-icon');

  } else if(firstPath == 'service-worker.js') {
    indexPage = fs.readFileSync( './public/service-worker.js', 'utf8')
    res.set('Content-Type', 'application/javascript');

  } else {
    indexPage = fs.readFileSync( './public/index.html', 'utf8')
    res.set('Content-Type', 'text/html');
  }
  //res.sendFile(path.resolve(__dirname, '.', 'public', 'index.html'))
  res.end(indexPage)
})

/* handle error */
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
      error: {
          message: err,
          code: 0
      }
  });
  next();
});

// Export your express server so you can import it in the lambda function.
module.exports = app

const path = require('path');
const express = require('express');
const controller = require('./controllers');
const app = express();
const PORT = 3000;
//const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended : true }))
app.get(
  //express.static(path.resolve(__dirname, '../index.html')))
'/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
})
app.post('/SignUp', controller.makeProfile, (req, res) => {
  console.log('routed')
  res.status(200).json(res.locals)})

app.post('/SignUp/login', controller.loginProfile, (req, res) =>{
console.log('attempted login')
res.status(200).json(res.locals)})

app.use((req, res, next) => {
  console.log('404 happened')
    res.status(404).send("Sorry can't find that!")
  })
  app.use((err, req, res, next) => {
    const defaultErr = 
      {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred, global handler' }, 
      }
    const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log)
  res.status(errorObj.status).send(JSON.stringify(errorObj.message))
    })
    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
      });
      
      module.exports = app;
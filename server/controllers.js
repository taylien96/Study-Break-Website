const db = require('./models');

const controller = {};

controller.makeProfile = async (req, res, next) => {
    // write code here
    const {username} = req.body
    const {password} =req.body
    const defColor = 'aquamarine';
    const defPokemon = 'umbreon';
    //const checkIfUser = "SELECT * FROM USERS WHERE USERNAME = $1;"
    const checkIfUser = 'select * from users where username = $1'
    const makeUser = 'INSERT INTO USERS (USERNAME, PASSWORD, COLORPREFRENCE, POKEMON) VALUES ($1, $2, $3, $4);'
    try{
        
        let query =  await db.query(checkIfUser, [username])
        if(query.rows[0]){
          res.locals.signin = { error: 'username already exists'}
          
        }
        if(!query.rows[0]){
          let make =  await db.query(makeUser, [username, password, defColor, defPokemon])
          res.locals.signin = { made: 'Profile created'}
        }
    
    next();}
    catch (err) {
      return next(err);
  }};
  controller.loginProfile = async (req, res, next) => {
    // write code here
    const {username} = req.body
    console.log(username)
    const {password} =req.body
    //const checkIfUser = "SELECT * FROM USERS WHERE USERNAME = $1;"
    const checkIfUser = 'select * from users where username = $1 and password = $2'
    try{
        
        let query =  await db.query(checkIfUser, [username, password])
        if(query.rows[0]){
            console.log(query.rows)
            res.locals.loginin = { made : query.rows}
        }
        if(!query.rows[0]){
          res.locals.loginin = { error: 'Wrong Username or Password'}
        }
    
    next();}
    catch (err) {
      return next(err);
  }};
  controller.saveColor = async (req, res, next) => {
    // write code here
    const {username} = req.body
    console.log(username)
    const {color} =req.body
    //const checkIfUser = "SELECT * FROM USERS WHERE USERNAME = $1;"
    const checkIfUser = 'UPDATE users SET colorprefrence = $2 WHERE username = $1;'
    try{
        
        let query =  await db.query(checkIfUser, [username, color])
        res.locals = { color : 'color updated'}
    
    next();}
    catch (err) {
      return next(err);
  }};
module.exports = controller;
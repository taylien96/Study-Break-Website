const db = require('./models');

const controller = {};

starWarsController.getCharacters = async (req, res, next) => {
    // write code here
    try{
    
    next();}
    catch (err) {
      return next(createErr({
        method: 'getCharacters',
        type: err.type ? err.type : 'reading/writing file',
        err: err.err ? err.err : err,
      }));
  }};

module.exports = controller;
const fooBar = require('../models/numberModel');

// GET and RENDER input-number view
exports.getInputNumber = (req, res, next) => {
  res.render('input-number', {
    pageTitle: 'Input Number',
    path: '/number/input',
    showOutput: false,
  });
};

// POST and RENDER input-number view
exports.postInputNumber = (req, res, next) => {
  const reqInputNumber = Number(req.body.inputNumber); 
  const data = fooBar.FooBar(reqInputNumber); 

  res.render('input-number', {
    resNumbers: data,
    resInputNumber: reqInputNumber,
    pageTitle: 'Input Number',
    path: '/number/input',
    showOutput: true,
  });
};

//GET and RENDER instruction view
exports.getInstructions = (req, res, next) => {
  res.render('instruction', {
    pageTitle: 'Instructions',
    path: '/',
  });
};

//API POST and return JSON Object
exports.apiPostInputNumber = (req, res, next) => {
  const reqInputNumber = Number(req.body.inputNumber);
  const data = fooBar.FooBar(reqInputNumber); 
  res.send(data);
};

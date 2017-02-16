<<<<<<< HEAD
//var linksController = require('../links/linkController.js');
=======
var linksController = require('../links/linkController.js');
>>>>>>> 04886e545dffe2e11953a4ceda0f24c47d7439c0
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var express = require ('express');
var multer  = require('multer');
var upload = multer({ dest: 'client/uploads/' })
var router = express.Router();
router.get ('/',function(req,res,next){
  res.send('response with a resource ')
});
router.post('/',upload.any(),function(req,res,next){
  res.send(req.files);
});

module.exports = router ;
module.exports = function (app, express) {
<<<<<<< HEAD
 // app.get('/:code', linksController.navToLink);
=======
  app.get('/:code', linksController.navToLink);
>>>>>>> 04886e545dffe2e11953a4ceda0f24c47d7439c0

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
<<<<<<< HEAD
  //app.get('/api/links/', linksController.allLinks);
  //app.post('/api/links/', linksController.newLink);
=======
  app.get('/api/links/', linksController.allLinks);
  app.post('/api/links/', linksController.newLink);
>>>>>>> 04886e545dffe2e11953a4ceda0f24c47d7439c0

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};


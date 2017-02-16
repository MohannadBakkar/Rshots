//var linksController = require('../links/linkController.js');
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
 // app.get('/:code', linksController.navToLink);

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  //app.get('/api/links/', linksController.allLinks);
  //app.post('/api/links/', linksController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};



angular.module('Rshots.services', [])

<<<<<<< HEAD
.factory('Images', function ($http) {

  var getAllImages = function (board) {
    return $http({
      method: 'GET',
      url: '/api/images',
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    }).catch(function(err){
      if(err) {
        console.log(err);
        throw err;
      }
    });
  };    

  var getUserImages = function (user) {
    return $http({
      method: 'GET',
      url: '/api/users/' + user
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    }).catch(function(err){
      if(err) {
        console.log(err);
        throw err;
      }
    });
  };      

=======
>>>>>>> 04886e545dffe2e11953a4ceda0f24c47d7439c0

.factory('Auth', function ($http, $location, $window) {
 
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.Rshots');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.Rshots');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
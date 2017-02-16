// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('Rshots.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        // please change the link below to correct path and thanks 
        $window.localStorage.setItem('com.Rshots', token);
        // please change the link below to correct path and thanks 
        $location.path('/home');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.Rshots', token);
        // please change the link below to correct path and thanks 
        $location.path('/home');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});

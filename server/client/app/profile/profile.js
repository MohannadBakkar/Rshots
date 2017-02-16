angular.module('rshots.profile', ['ngAvatar'])

.controller('ProfileController', function ($scope, $location, $window, Images, Auth) {
  $scope.data = {};
  $scope.ImagesComments = [];

  Images.getUserImages($window.localStorage.getItem('user.images')).then(function(data) {
    $scope.data.images = data;
  });

'use strict';

var app = angular.module('authApp');

app.controller('profileCtrl', function() {
  console.log('profileCtrl!');
});

app.controller('mainCtrl', function($scope, $state) {
  console.log('mainCtrl');
});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl!');


  

});

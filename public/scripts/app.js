console.log('$http');
//declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) { //need to tell controller using $http
  console.log('NG');
  var vm = this;


  vm.randomGet = function() {
    console.log('in randomGet');
  };

}); //end HttpController

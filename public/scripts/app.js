console.log('$http');
//declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) { //need to tell controller using $http
  console.log('NG');
  var vm = this;
  var searchURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';



  vm.randomGet = function() {

    console.log('in randomGet');
    $http.get(searchURL).then(function(response) {
      console.log(response);


    });
  }; //end randomGet


}); //end HttpController

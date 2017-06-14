console.log('$http');
//declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function($http) { //need to tell controller using $http
  console.log('NG');
  var vm = this;

  var randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';



  vm.randomGet = function() {

    console.log('in randomGet');
    $http.get(randomURL).then(function(response) {
      console.log(response);
      vm.gifs = response.data.data;

    });
  }; //end randomGet

  vm.searchGif = function() {
    var search = vm.search;
    console.log(search);
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
    $http.get(searchURL).then(function(response) {
      console.log(response);
      vm.returnSearch = response.data.data;
    }); //end searchGif
  }; //end search function


}); //end HttpController

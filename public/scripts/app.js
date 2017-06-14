console.log('$http');
//declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function(GifService) { //need to tell controller using $http
  console.log('NG');
  vm = this;

  vm.newClick = function() {

    GifService.randomGet().then(function(backWithGif) {
      vm.gifs = backWithGif;
      vm.randomGet = GifService;
    });
  };





  vm.newSearch = function(search) {

    GifService.searchGif(search).then(function(backWithSearch) {
      vm.gifs = backWithSearch;
      vm.searchGif = GifService;
      console.log(vm.gifs);
    });
  };
}); //end HttpController

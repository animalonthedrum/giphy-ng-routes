myApp.service('GifService', function($http) {
  gs = this;

  var randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';



  gs.randomGet = function() {

    console.log('in randomGet');
    return $http.get(randomURL).then(function(response) {
      console.log(response);
      return response.data.data;
    });
  }; //end randomGet



  gs.searchGif = function(search) {

    console.log(search);
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
    return $http.get(searchURL).then(function(response) {
      console.log(response);
      return response.data.data;
    }); //end searchGif
  }; //end search function
});

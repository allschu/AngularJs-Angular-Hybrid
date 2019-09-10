angular.module('testApp').factory('myFactory', function ($http) {
  return {
    getNasa: function () {
      return $http.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
    }
  }
});

angular.module('testApp').factory('myFactoryTest', function ($http) {

  return {
    save: function () {
      return $http.post('http://localhost:5001/api/Values', { myData: 'adasdas' }).then(function (resp) {
        console.log(resp.headers('Location'));
      });
    }
  }
});

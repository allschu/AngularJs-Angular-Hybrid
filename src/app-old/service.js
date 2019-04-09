angular.module('testApp').factory('myFactory', function($http){
    return {
        getNasa: function(){
            return $http.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
        }
    }
});
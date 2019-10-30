angular.module('testApp', ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: require("./page1.html"),
            controller: "mainController"
        })
        .when("/app-old/page1", {
          template: require("./page1.html"),
          controller: "mainController"
        })
        .when("/app-old/page2", {
            template: require("./page2.html"),
            controller: "secondController"
        })
          // use the HTML5 History API
          $locationProvider.html5Mode(true);
});

angular.module('testApp').controller('mainController', ['$scope', 'myFactory', 'myFactoryTest', 'nasaServiceService', function ($scope, myFactory, myFactoryTest, nasaServiceService) {

    $scope.pageName = "FirstPage + Nasa";
    myFactory.getNasa().then(function (response) {

        $scope.response = response.data.title;
        $scope.imageUrl = response.data.url;
    });

    myFactoryTest.save().then(function(value){
      console.log(value);
    });

}]);

angular.module('testApp').controller('secondController', ['$scope', function ($scope) {

    $scope.pageName = "secondPage";

}]);

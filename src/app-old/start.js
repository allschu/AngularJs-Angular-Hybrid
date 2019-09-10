angular.module('testApp', ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: require("./page1.html"),
            controller: "mainController"
        })
        .when("/page2", {
            template: require("./page2.html"),
            controller: "secondController"
        })
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

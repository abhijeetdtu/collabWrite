app.controller("HomeController", ["$scope" , function ($scope ) {
    //$scope.canvasResize();
$scope.saveEditor = function(data){console.log(data)};
console.log($scope.saveEditor);
}])
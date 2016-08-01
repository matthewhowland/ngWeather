(function(){
  angular.module('ngWeather')
          .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope, WeatherService){
    $scope.minutelyData = WeatherService.weather;

  $scope.$watch(function(){
    return WeatherService.weather;
  }, function(value){
    console.log(value);
    $scope.minutelyData = value;
  });
}
})();

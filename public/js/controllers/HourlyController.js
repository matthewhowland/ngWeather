(function(){
  angular.module('ngWeather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
    }
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      console.log(value);
      $scope.hourlyData = value;

    });
  }

})();

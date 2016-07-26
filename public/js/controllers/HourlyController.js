(function(){
  angular.module('ngWeather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;

    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      console.log(value);
      $scope.hourlyData = value;
    }
    });


  }
})();

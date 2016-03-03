angular.module('salary-chart').controller('ChartController', function($scope) {
	
	$scope.labels = ['Lu', 'Kovaleva', 'Ksyusha'];
	$scope.type = 'PolarArea';
	
	$scope.rent = 3000;
	$scope.kovaleva = 5000;
	$scope.ksyusha = 10000;
	
	$scope.overall = $scope.kovaleva + $scope.ksyusha;
	$scope.profit = $scope.overall - $scope.rent;
	
	var data = [
	            $scope.profit / 3.0,
	            2 * $scope.kovaleva * $scope.profit / (3 * $scope.overall),
	            2 * $scope.ksyusha * $scope.profit / (3 * $scope.overall)
	            ];
	
	$scope.data = data;
	
	$scope.calculate = function(rent, kovaleva, ksyusha) {
		
		var overall = parseInt(kovaleva) + parseInt(ksyusha);
		var profit = parseInt(overall) - parseInt(rent);
		
		console.log("Total income now: %s", overall);
		console.log("Profit now: %s", profit);
		
		var data = [
		            profit / 3.0,
		            2 * kovaleva * profit / (3 * overall),
		            2 * ksyusha * profit / (3 * overall)
		            ];
		
		return data;
		
	};
	
	$scope.applyChanges = function() {
		console.info("Recalculating salary: rent=%s, kovaleva income=%s, ksyusha income=%s",
				$scope.rent, $scope.kovaleva, $scope.ksyusha);
		$scope.data = $scope.calculate($scope.rent, $scope.kovaleva, $scope.ksyusha);
		$scope.overall = parseInt($scope.kovaleva) + parseInt($scope.ksyusha);
		$scope.profit = parseInt($scope.overall) - parseInt($scope.rent);
	}
	
});
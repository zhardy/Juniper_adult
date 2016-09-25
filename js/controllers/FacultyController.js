app.controller('FacultyController', ['$scope', '$http', function ($scope, $http){
	$http.get("http://localhost:3000/GetWriters")
		.then(function(result){
			$scope.writers = result.data.WriterArray[0];

		},
		function(err){
			$scope.error = "Seems like there is a problem with the server...you should let Zack know and he'll get back to you.";
		});
}
]);
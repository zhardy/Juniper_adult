app.controller('EnrolledController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.scrollToHref = function(id) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(id);

      // call $anchorScroll()
      $anchorScroll();
    };


  }]);
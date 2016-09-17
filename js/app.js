var app = angular.module('InstituteApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/main.html'
    })
    .when('/institute/about', {
      templateUrl: 'views/about.html'
    })
    .when('/institute/faculty', {
      templateUrl: 'views/faculty.html'
    })
    .when('/institute/workshops', {
      templateUrl: 'views/workshops.html'
    })
    .when('/institute/craft', {
      templateUrl: 'views/craft.html'
    })
    .when('/institute/reading', {
      templateUrl: 'views/reading.html'
    })
    .when('/institute/admission', {
      templateUrl: 'views/admission.html'
    })
    .when('/sponsors', {
      templateUrl: 'views/sponsors.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .when('/success', {
      templateUrl: 'views/success.html'
    })
    .when('/not_open', {
      templateUrl: 'views/not_open.html'
    })
    .when('/error', {
      templateUrl: 'views/404.html'
    })
    .otherwise({ 
      redirectTo: '/error' 
    });

});


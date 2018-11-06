var app = angular.module('InstituteApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      // templateUrl: 'views/main.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/';
        }
    })
    .when('/institute/about', {
      // templateUrl: 'views/about.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/about/';
        }
    })
    .when('/institute/faculty', {
      // templateUrl: 'views/faculty.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/faculty-and-guest-writers/';
        }
    })
    .when('/institute/workshops', {
      // templateUrl: 'views/workshops.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/workshops/';
        }
    })
    .when('/institute/craft', {
      // templateUrl: 'views/craft.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/craft-sessions/';
        }
    })
    .when('/institute/reading', {
      // templateUrl: 'views/reading.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/reading-series/';
        }
    })
    .when('/institute/admission', {
      // templateUrl: 'views/admission.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/admission-and-scholarships/';
        }
    })
    .when('/institute/enrolled', {
      // templateUrl: 'views/enrolled.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/for-enrolled-participants/';
        }
    })
    .when('/sponsors', {
      // templateUrl: 'views/sponsors.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/partners-and-sponsors/';
        }
    })
    .when('/contact', {
      // templateUrl: 'views/contact.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/contact/';
        }
    })
    .when('/success', {
      // templateUrl: 'views/success.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/';
        }
     })
    .when('/not_open', {
      // templateUrl: 'views/not_open.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/';
        }
    })
    .when('/error', {
      // templateUrl: 'views/404.html'
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/';
        }
    })
    .otherwise({ 
      // redirectTo: '/error' 
        redirectTo: function(routeParams) {
            window.location = 'https://2019.juniper.umasscreate.net/';
        }
    });

});


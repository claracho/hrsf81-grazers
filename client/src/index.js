const angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

angular.module('eventHUD', ['ngRoute', 'ngMaterial'])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        template: '<sign-in sign-in="$resolve.signIn"></sign-in>',
        resolve: {
          signIn: signin => signin.submit()
        }
      })
      .when('/organizer', {
        template: '<manage-event user="$resolve.user"></manage-event>',
        resolve: {
          user: signin => signin.getUser()
        }
      })
      .when('/staff', {
        template: '<staff-view user="$resolve.user"></staff-view>',
        resolve: {
          user: signin => signin.getUser()
        }
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

require('./components');
require('./services');

'use strict';

angular.module('dengchiApp.auth', [
  'dengchiApp.constants',
  'dengchiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

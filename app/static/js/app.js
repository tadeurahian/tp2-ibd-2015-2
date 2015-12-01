'use strict';

// Declare app level module which depends on views, and components
var ibdApp = angular.module('ibdApp', [
  'ngRoute',
  'ui.mask'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $routeProvider.when('/cadastrar-pessoa', {
    templateUrl: 'static/partials/cadastro-pessoa.html',
    controller: 'CadastroPessoaCtrl'
  });

  $(document).ready(function () {
    $(document).foundation();
  });
}]);

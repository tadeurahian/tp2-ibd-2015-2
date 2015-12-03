'use strict';

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

  $routeProvider.when('/cadastrar-livro', {
    templateUrl: 'static/partials/cadastro-livro.html',
    controller: 'CadastroLivroCtrl'
  });

  $routeProvider.when('/doacao', {
    templateUrl: 'static/partials/doacao.html',
    controller: 'DoacaoCtrl'
  });

  $routeProvider.when('/aluguel', {
    templateUrl: 'static/partials/aluguel.html',
    controller: 'AluguelCtrl'
  });

  $routeProvider.when('/devolucao', {
    templateUrl: 'static/partials/devolucao.html',
    controller: 'DevolucaoCtrl'
  });

  $(document).ready(function () {
    $(document).foundation();
  });
}]);

'use strict';

ibdApp.factory('ServicoBase', function ($http, $rootScope) {
  var ServicoBase = {},
      tratarErro;

  tratarErro = function (response) {
    $rootScope.exibirTicker(response.status + response.statusText, 'error');
  };

  ServicoBase.post = function (url, dados, sucesso) {
    $http.post($rootScope.api + url, dados, {})
      .then(function (response) {
        sucesso();
      }, tratarErro);
  };

  ServicoBase.get = function (url, dados, sucesso) {
    return $http.get($rootScope.api + url, dados, {});
  };

  return ServicoBase;
});

ibdApp.factory('Pessoa', function (ServicoBase, $rootScope) {
  var Pessoa = {};

  Pessoa.cadastrar = function (dados) {
    dados.id_pessoa = null;

    ServicoBase.post('/user', dados, function () {
      $rootScope.exibirTicker('Nova pessoa cadastrada com sucesso!', 'success');
    });
  };

  return Pessoa;
});

ibdApp.factory('Livro', function (ServicoBase, $rootScope) {
  var Livro = {};

  Livro.cadastrar = function (dados) {
    dados.id_livro = null;

    ServicoBase.post('/book', dados, function () {
      $rootScope.exibirTicker('Novo livro cadastrado com sucesso!', 'success');
    });
  };

  return Livro;
});

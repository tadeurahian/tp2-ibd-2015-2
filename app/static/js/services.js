'use strict';

ibdApp.factory('ServicoBase', function ($http, $rootScope) {
  'use strict';

  var ServicoBase = {},
      tratarErro;

  ServicoBase.tratarErro = function (response) {
    $rootScope.exibirTicker(response.status + ' ' + response.statusText, 'error');
  };

  ServicoBase.post = function (url, dados, sucesso) {
    $http.post($rootScope.api + url, dados, {})
      .then(function (response) {
        sucesso();
      }, ServicoBase.tratarErro);
  };

  ServicoBase.get = function (url, dados) {
    return $http.get($rootScope.api + url, dados, {});
  };

  ServicoBase.put = function (url) {
    return $http.put($rootScope.api + url, {}, {});
  };

  return ServicoBase;
});

ibdApp.factory('Pessoa', function (ServicoBase, $rootScope) {
  'use strict';

  var Pessoa = {};

  Pessoa.cadastrar = function (dados) {
    dados.id_pessoa = null;

    ServicoBase.post('/user', dados, function () {
      $rootScope.exibirTicker('Nova pessoa cadastrada com sucesso!', 'success');
    });
  };

  Pessoa.obterTodasAsPessoas = function () {
    return ServicoBase.get('/user/all', {}, {});
  };

  return Pessoa;
});

ibdApp.factory('Livro', function (ServicoBase, $rootScope) {
  'use strict';

  var Livro = {};

  Livro.cadastrar = function (dados) {
    dados.id_livro = null;

    ServicoBase.post('/book', dados, function () {
      $rootScope.exibirTicker('Novo livro cadastrado com sucesso!', 'success');
    });
  };

  Livro.obterTodosOsLivros = function () {
    return ServicoBase.get('/book/all', {}, {});
  };

  Livro.obterUnidadesLivro = function (id_livro) {
    return ServicoBase.get('/book/available/' + id_livro, {}, {});
  };
  return Livro;
});

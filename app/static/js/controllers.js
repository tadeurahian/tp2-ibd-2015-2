'use strict';

ibdApp.controller('MainCtrl', function ($scope, $rootScope) {
  'use strict';

  $rootScope.exibirTicker = function (mensagem, erro) {
    $scope.ticker.message = mensagem;
    $scope.ticker.type = erro;
    $scope.ticker.show = true;
  };

  $rootScope.esconderTicker = function() {
    $scope.ticker.show = false;
  };

  $scope.ticker = {};

  $scope.ticker.message = '';
  $scope.ticker.type = '';
  $scope.ticker.show = false;
});

ibdApp.controller('CadastroPessoaCtrl', function ($scope, $rootScope) {
  'use strict';

  $scope.limparDados = function () {
    $scope.dados.nome = '';
    $scope.dados.email ='';
    $scope.dados.cpf = '';
    $scope.dados.telefone = '';
    $scope.dados.endereco = '';
  };

  $scope.salvar = function () {
    $rootScope.exibirTicker('teste', 'success');
  };

  $scope.dados = {};
  $scope.limparDados();
});

ibdApp.controller('CadastroLivroCtrl', function ($scope, $rootScope) {
  'use strict';

  $scope.limparDados = function () {
    $scope.dados.titulo = '';
    $scope.dados.editora = '';
    $scope.dados.categoria = '';
    $scope.dados.autores = [];
    $scope.autor.nome = '';
  };

  $scope.adicionarAutor = function () {
    $scope.dados.autores.push({
      nome: $scope.autor.nome
    });
  };

  $scope.removerAutor = function (index) {
    $scope.dados.autores.splice(index, 1);
  };

  $scope.dados = {};
  $scope.autor = {};
  $scope.limparDados();
});

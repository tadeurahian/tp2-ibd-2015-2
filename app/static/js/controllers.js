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

  $rootScope.api = 'http://localhost:3000';
});

ibdApp.controller('CadastroPessoaCtrl', function ($scope, $rootScope, Pessoa) {
  'use strict';

  $scope.limparDados = function () {
    $scope.dados.nome = '';
    $scope.dados.email ='';
    $scope.dados.cpf = '';
    $scope.dados.telefone = '';
    $scope.dados.endereco = '';
  };

  $scope.salvar = function () {
    Pessoa.cadastrar($scope.dados);

    $scope.limparDados();
  };

  $scope.dados = {};
  $scope.limparDados();
});

ibdApp.controller('CadastroLivroCtrl', function ($scope, $rootScope, Livro) {
  'use strict';

  $scope.limparDados = function () {
    $scope.dados = {};
    $scope.autor = {};
    $scope.dados.book = {};
    $scope.dados.autores = [];

    $scope.dados.book.titulo = '';
    $scope.dados.book.categoria = '';
    $scope.dados.book.editora = '';
  };

  $scope.adicionarAutor = function () {
    $scope.dados.autores.push($scope.autor.nome);
  };

  $scope.removerAutor = function (index) {
    $scope.dados.autores.splice(index, 1);
  };

  $scope.salvar = function () {
    Livro.cadastrar($scope.dados);
  };

  $scope.limparDados();
});

ibdApp.controller('DoacaoCtrl', function ($scope, $rootScope) {
  'use strict';

  $scope.dados = {};
  $scope.livro = {};
});

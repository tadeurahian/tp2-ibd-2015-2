'use strict';

ibdApp.controller('CadastroPessoaCtrl', function ($scope) {
  $scope.dados = {};

  $scope.limparDados = function () {
    $scope.dados.nome = '';
    $scope.dados.email ='';
    $scope.dados.cpf = '';
    $scope.dados.telefone = '';
    $scope.dados.endereco = '';
  };

  $scope.salvar = function () {
    alert('TODO');
  };

  $scope.limparDados();

});

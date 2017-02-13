//Modulo admin
(function() {

  'use strict';

  angular.module('front-alego')

  .directive('frontAlegoHeaderTabelaMutante', ['$window',function($window){
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        titulo: "@",
        subtitulo: "@",
        linkNewTitulo: "@",
        linkNewState: "@",
        linkShowTitulo: "@",
        linkShowState: "@",
        linkEditTitulo: "@",
        linkEditState: "@",
        exibirBotaoVoltar: "@",
        busca: "=",
        termo: "="
      },
      controller: ['$scope','$rootScope',function($scope, $rootScope) {
        $scope.mudarPreferencia = mudarPreferencia;
        $scope.deveExibirControlesTabela = deveExibirControlesTabela;
        $scope.voltar = voltar;

        $scope.modo = $window.localStorage.getItem('preferencia_visualizacao_conteudo');

        if(!$scope.modo) {
          $scope.modo = "tabela";
        }

        function deveExibirControlesTabela() {
          return  $scope.busca !== undefined;
        }

        function mudarPreferencia(tipoVisualizacao) {
          $scope.modo = tipoVisualizacao;
          $window.localStorage.setItem('preferencia_visualizacao_conteudo', tipoVisualizacao);
          $rootScope.$broadcast("atualizar-tabela-mutante");
        }

        function voltar() {
          $window.history.back();
        }

      }],
      templateUrl: "front-alego/header-tabela-mutante.html"
    };
  }])


  .directive('frontAlegoTabelaMutante', ['$window',function($window){
    return {
      link: function(scope, element) {
        atualizarTabelaMutante();

        scope.$on("atualizar-tabela-mutante", atualizarTabelaMutante);

        function atualizarTabelaMutante( ) {
          var tipoAtual = "tab";
          var tipoAntigo = "tab--card";


          var preferencia = $window.localStorage.getItem('preferencia_visualizacao_conteudo');

          if(preferencia == "card") {
            tipoAtual = "tab--card";
            tipoAntigo = "tab";
          }
          element.addClass(tipoAtual);
          element.removeClass(tipoAntigo);

        }

      }
    };
  }]);



})();

//Modulo admin
(function() {

  'use strict';

  angular.module('front-alego')

  .directive('frontAlegoRotaAtiva', ['$window','$state', '$rootScope',function($window, $state, $rootScope){
    return {
      link: function(scope, element, attributes) {

        $rootScope.$on('$stateChangeSuccess', atualizar);

        atualizar();

        function atualizar() {

         var rota = attributes.frontAlegoRotaAtiva;
         var atual = $state.current.name;
         var classe = 'ativo';

         if(atual.indexOf(rota) != -1) {
          element.addClass(classe);
        }
        else {
          element.removeClass(classe);
        }
      }

    }
  };
}]);



})();

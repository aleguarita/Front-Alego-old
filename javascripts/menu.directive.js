//Modulo admin
(function() {

  'use strict';

  angular.module('front-alego')


  .service('frontAlegoConfig', function() {
    return {
      menus: []
    }
  })

  .directive('frontAlegoMenu', function(){
    return {
      replace: true,
      controller: ['$scope','frontAlegoConfig',function($scope, frontAlegoConfig) {

        var menus = frontAlegoConfig.menus;
        var permitidos = [];

        for(var i=0; i < menus.length; i++) {
          var menu = menus[i];

          if(frontAlegoConfig.possuiPermissao(menu.permissao)) {
            var index =  _.findIndex(permitidos, function(o) {
              return o.titulo == menu.grupo
            });
            
            if(index == -1) {
              permitidos.push({
                titulo: menu.grupo,
                itens: [menu]
              })
            }
            else {
              permitidos[index].itens.push(menu);
            }
          }
        }

        $scope.permitidos = permitidos;



      }],
      templateUrl: "front-alego/menu.html"

    };
  });



})();

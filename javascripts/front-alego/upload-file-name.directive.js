(function () {
    'use strict';
    angular.module('front-alego').directive('uploadFileName', function () {
        return {
            link: function (scope, element, attrs) {

              var label = $(element).parent().find('.form-file__info');

              $(element).on('change', change);

              function change(e) {
                var fileName = '';

                if(this.files && this.files.length > 1) {

                    fileName =  ( this.getAttribute( 'data-multiple-caption' ) || "{count} arquivos selecionados." ).replace( '{count}', this.files.length );
                }
                else {
                  fileName = e.target.value.split( '\\' ).pop();
              }

              if(fileName) {
                  $(label).html(fileName);
              }
          }
      }
  };

});

})();
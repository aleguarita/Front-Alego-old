(function () {
    'use strict';
    angular.module('front-alego').directive('autocomplete', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                autocompleteconfig: '=',
            },
            link: function (scope, elem, attr, ctrl) {

                scope.$watch('autocompleteconfig', function (value) {

                    value.select = select;

                    value.change = change;

                    elem.autocomplete(value);

                    if(value.defaultText) {
                        elem.val(value.defaultText);
                    }
                });
               

                function select(event, ui) {
                    ctrl.$setViewValue(ui.item.id);
                }

                function change(ev, ui) {
                    if (!ui.item) {
                        $(this).val("");
                        ctrl.$setViewValue(null);
                    }
                }
            }
        }
        
    });

})();
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
                    
                    value.select = function(event, ui) {
                        ctrl.$setViewValue(ui.item.id);
                    }

                    value.change = function (ev, ui) {
                        if (!ui.item)
                            $(this).val("");
                        }
                    }

                    elem.autocomplete(value);

                    if(value.defaultText) {
                        elem.val(value.defaultText);
                    }
                });
            }
        };
    });

})();
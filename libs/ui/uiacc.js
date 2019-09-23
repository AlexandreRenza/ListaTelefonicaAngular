 angular.module('uiAcc', []);

// angular.module('uiAcc').run(function($templateCache){

//     $templateCache.put('<div>teste</div>');

// });

angular.module('uiAcc').directive('uiAccordions', function(){

    return{
        restrict: "AE",
        controller: function($scope, $element, $attrs){
            var accordions = [];

            this.registerAccordion = function(accordion){
                accordions.push(accordion);
            };

            this.closeAll = function(){
                accordions.forEach(function(accordion){
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module('uiAcc').directive('uiAccordion', function(){

    return{
        templateUrl:"./view/accordion.html",
        transclude: true,
        restrict: "AE",
        scope:{
            title: "@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function(){
                ctrl.closeAll();                                    
                scope.isOpened=true;              
            };
        }
    };
});
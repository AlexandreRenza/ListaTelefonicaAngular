angular.module("listaTelefonica").directive("uiDate", function(){


    return{
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){ /// passando o scope do controller
           
           var _formatDate = function(date){
                date = date.replace(/[^0-9]+/g,""); /// substitui td q nao é numero por nada
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 2){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }

                return date;
           }
           
            element.bind("keyup", function(){ /// a cada tecla digitada
                console.log(ctrl.$viewValue);
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            })
            
        }
    };



});
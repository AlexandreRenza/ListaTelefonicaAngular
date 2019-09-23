angular.module("listaTelefonica").filter("elipsis", function(){

return function(input, size){
    if (input.length <= size) return input;
    output = input.substring(0,size) + "...";

    return output;

};


});
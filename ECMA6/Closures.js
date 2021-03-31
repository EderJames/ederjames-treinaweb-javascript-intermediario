function planeta(){

    function pais(){
        function estado(){

            function cidade(){

                function bairro(){

                    function rua(){

                        function suaCasa(){

                        }

                    }

                }
            }
        }
    }
}

var add = (function(){
    var counter = 0;

    return function(){
        return counter++;
    }


})();
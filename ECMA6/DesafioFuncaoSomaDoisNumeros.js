//Nesta declaração da função sum, estamos recebendo um parâmetro n1 e estamos retornando uma função
//Esta função retornada precisará ser acionada, portanto a chamada da função sum, ficaria assim: sum(n1)(n2).
//O Primeiro parentese significa a chamada da função sum, o segundo parentese significa a chamada da função retornada pela função sum.

function sum(n1){
    return function(n2){
        return n1 + n2;
    }
}

console.log(sum(5)(4));
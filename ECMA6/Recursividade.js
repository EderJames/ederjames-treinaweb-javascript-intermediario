//UTILIZANDO FATORIAIS SEM RECURSIVIDADE
function factorial(n){
    if(n === 0){
        return 1;
    }
    else{
        var product = 1;
        for(var i = 1; i <= n; i++){
            product *= i;
        }
        return product;
    }
}

//UTILIZANDO FATORIAIS COM RECURSIVIDADE

function factorialRecursivo(n){
    if(n === 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
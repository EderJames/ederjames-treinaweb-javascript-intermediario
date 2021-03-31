var Dog = {
    name: 'Dingo',
    sayName: function(){
        console.log(this.name);
    }
}

var Cat = {
    name: 'Gumball'
}

//Utilizamos a função call(), para mudar o escopo do this, fazendo com que a function 
//sayName, presente no objeto Dog, seja executada pelo escopo do this, do objeto Cat.
Dog.sayName.call(Cat);

//Mudamos o escopo do this, referente a chamada do método forEach, passando a utiliza-lo
//com uma string, ao invés de um array
[].forEach.call('my string', function(letter){
    console.log(letter);
});
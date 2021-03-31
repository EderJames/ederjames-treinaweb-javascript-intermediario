//Utilizando setTimeout sem o uso da função bind(), para mudar o escopo do this.
//Nesta situação, estamos armazenando o valor de this, dentro da variável that.

var myObj = {
    name: 'TreinaWeb',
    sayName: function(){
        console.log(this.name);
        var that = this;

        setTimeout(function(){
            console.log(that.name);
        }, 1000);
    }
}

//Solucionando a questão do setTimeOut com ArrowFunctions
//É importante lembrar que arrow functions não criam novos escopos, 
//elas continuam utilizando o escopo atual do local em que foram declaradas

var myObj2 = {
    name: 'TreinaWeb',
    sayName: function(){
        console.log(this.name);

        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}
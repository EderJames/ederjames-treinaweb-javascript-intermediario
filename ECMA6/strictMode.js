//Observação: As variáveis que não foram criadas/declaradas com var ou let, automaticamente são declaradas como variáveis globais, trazendo riscos
//ao desenvolvimento do sistema

//A utilização da string "strict mode" ativa um modelo rígido de interpretação de códigos do js, fazendo com que este e outros erros passem
//a aparecer no console.

//Assim fazemos o strict mode para todo o arquivo
"use strict"

function MyLoop(){
    //Assim fazemos o strict mode para a função
    "use strict"
    for(i = 0; i < 5; i++){
        console.log(i);
    }
}

MyLoop();

function MyPencil(){
    this.color = "red";
}

//Este comportamento fará com que criemos uma variável color no escopo global, isso porque estamos instanciando o protótipo sem o new.
//Entretanto, utilizando o strict mode, este código gera um erro e retorna um undefined
var caneta = MyPencil();

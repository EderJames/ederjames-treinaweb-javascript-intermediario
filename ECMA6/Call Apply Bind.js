//Bind -> retorna uma função, mas não executa
var myObj = {
    name: 'TreinaWeb',
    sayName: function(){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name);
        }.bind(this), 1000);
    },

    sayName2: function(){
        console.log(this.name);
        var myFuncCriadaComoUmBind = function(){
            console.log(this.name);
        }.bind(this);

        setTimeout(myFunc, 1000);
    }
}



//CALL -> chama a função propriamente dita
function myFunc(this, param1, param2, param3){
    console.log("teste call");
}

myFunc.call(this, 1,2,3);

//Apply -> chama a função propriamente dita
function myFunction2(this, params){
    console.log("teste apply");
}

myFunc.apply(this, [1,2,3]);
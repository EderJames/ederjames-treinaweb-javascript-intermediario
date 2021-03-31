//Utilizando js nativo

//Seletores
var divPorTag = document.getElementsByTagName('div');
var elementoPorClass = document.getElementsByClassName('def');
var elementoPorId = document.getElementById('#abc');
var elementoPorSeletor= document.querySelector('#abc');

//Listeners
document.querySelector('#abc').addEventListener('click', function(){
    console.log('abc');
});

//Requsições
var myReq = new XMLHttpRequest();
myReq.onload = function(){
    console.log(JSON.parse(this.responseText));
}

myReq.open('get', 'https://api.github.com/search/repositories?q=javascript', true);
myReq.send();

//Utilizando JQuery
//Seletores
$('#abc');

//Listeners
$('#abc').on('click', function(){
    console.log('abc');
});

//Requisições
$.ajax('https://api.github.com/search/repositories?q=javascript')
        .then(function(response){
            console.log(response);
        });
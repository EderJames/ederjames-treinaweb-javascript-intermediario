var myRegexp1 = /\d{2}\/\d{2}\/\d{4}/;
var myRegexp2 = new RegExp('\d{2}\/\d{2}\/\d{4}');

var regex = /abc/;
var myString = "abc def";
console.log(regex.test(myString));

//As funções exec e match são muito parecidas, a diferença é que exec é acionada através de um expressão regular
//Já a match, é acionada através de uma string

//Porém seus resultados podem ser diferentes, de acordo com a expressão testada

var regex2 = /a.c/;
var regex3 = /a.c/g;
var myString2 = "234abc123 a4c5";
console.log(regex2.exec(myString2));
console.log(regex3.exec(myString2));

console.log(myString2.match(regex2));
console.log(myString2.match(regex3));


//REPLACE com expressões regulares

var myStringToChange = "Abc abc Abc abc";

//Sem a expressão regular, temos o replace de somente uma ocorrênica
//console.log(myStringToChange.replace('a', 1));

//Através desta expressão regular, temos o replace de todas as ocorrência da letra a, independente de ela estar em maiúsculo ou em minúsculo
console.log(myStringToChange.replace(/a/gi, 1));

var myString3 = "abc-123-def";
var myRegex3 = /(ab)c-(\d{3})-def/;
console.log(myString3.replace(myRegex3, 'my number: ($1) - $2'));

//FAZENDO BUSCAS COM EXPRESSÕES REGULARES

//Método SEARCH
var stringExemploBusca = 'abc';

//Buscando com strings:
console.log(stringExemploBusca.indexOf('b'));

//Buscando com expressões regulares
console.log(stringExemploBusca.search(/b/));
console.log(stringExemploBusca.search(/b3/));

//LOOPING COM EXPRESSÕES REGULARES:
var regexParaLooping = /a.c/g;
var myStringParaLooping = "234abc123 a4c5";
var match;

while(match = regexParaLooping.exec(myStringParaLooping)){
    console.log(`${match[0]} - ${match.index}`);
}
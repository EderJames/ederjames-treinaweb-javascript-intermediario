console.log("teste1");
var myReq = new XMLHttpRequest();
myReq.onload = function(){
    console.log(JSON.parse(this.responseText));
}
console.log("teste2");
myReq.open('get', 'https://api.github.com/search/repositories?q=javascript', true);
myReq.send();

// Com funções:
function Pencil1(){
    this.color = 'red';

    this.write = function(text){
        console.log(text);
    }
}

//Com classes:
class Pencil{
    constructor(color){
        this.color = color;
    }

    write(){
        console.log(text);
    }
}

var myPencil = new Pencil('red');
function Pencil(color, length){
    
    var code =  153;

    function myFunc(){
        return "teste";
    }

    if(!(this instanceof Pencil)){
        return new Pencil(color, length);
    }
    
    this.color = color;
    this.length = length;

    this.write = function(text){
        console.log(text);
    }

    this.getCode = function(){
        return code;
    }

    this.setCode = function(value){
        
        return code = value;
    }
}


var myPencil = new Pencil("red", 15);
var myPencil2 = new Pencil("blue", 18);

function Animal(){
    this.sleep = function(){
        console.log('zzzzzzzzzz');
    }
}

function Dog(){
    this.bark = function(){
        console.log('woof');
    }
}

Dog.prototype = new Animal();

var myDog = new Dog();
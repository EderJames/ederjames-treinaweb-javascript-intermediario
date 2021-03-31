
class Rect{
    constructor(b, h){
        this.b = b;
        this.h = h;
    }
    
    area(){
        return this.b * this.h;
    }
}

class Square extends Rect{
    constructor(l){
        super(l, l);
    }
}

var triangulo = new Rect(3, 5);
var quadrado = new Square(4);


class Poligono{
    constructor(valores){
        this.valoresPoligono = valores;
        this.somaValores = 0;
    }
    
    perimetro(){
        debugger
        for(var i = 0; i < this.valoresPoligono.length; i++){
            this.somaValores += this.valoresPoligono[i];
        }

        return this.somaValores;
    }
}
class DesafioPar{
    constructor(){
        this.PropriedadeClasseAlterar = 0;
    }

    setPropriedadeClasseAlterar(value){
        if(value % 2 == 0){
            this.PropriedadeClasseAlterar = value;
            console.log(value);
        }
        else{
            throw new Error('The number need to be a pair');
        }
    }
}

var obj = new DesafioPar();

obj.setPropriedadeClasseAlterar(2);
obj.setPropriedadeClasseAlterar(4);
obj.setPropriedadeClasseAlterar(6);
obj.setPropriedadeClasseAlterar(3);

//The teacher solution:

var myObj = {
    _a: 0,
    get a(){
        return this._a;
    },
    set a(value){
        if(value % 2 !== 0){
            throw new Error();
        }
        this._a = value;
    }
}
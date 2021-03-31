var field, player;

class Field{
    
    constructor(cols, rows, containerId){
        this.cols = cols;
        this.rows = rows;
        this.container = document.querySelector(containerId);
        this.createField();
    }

    createField() {
        var field = [];
        for(var i = 0; i < this.rows; i++){
            field[i] = [];
            for(var j = 0; j < this.cols; j++){
                field[i].push(this.createRock()); 
            }
        }
        this.field = field;
        this.drawField();
    }

    createRock() {
        return Math.trunc((Math.random() * 5))  === 1 ? '@' : '';
    }

    drawField() {
        var template = '';
        for(var i = 0; i < this.rows; i++){
            template += '<tr>';
            
            for(var j = 0; j < this.cols; j++){
                template += `<td>${this.field[i][j]}</td>`;
            }

            template += '<tr>';
        }
        this.container.innerHTML = template;
    }
}

class Character{
    constructor(field, x, y, face){
        this.table  = field;
        this.x = x;
        this.y = y;
        this.face = face;
        if(!this.setPosition(this.x, this.y)){
            throw new Error("Can not possible creat person at this position, because it is already busied by a rock.");
        }
    }

    up(){
        if(this.y > 0){
            this.setPosition(this.x, this.y-1);
        }
    }

    down(){
        if(this.y + 1 < this.table.rows){
            this.setPosition(this.x, this.y + 1);
        }
    }

    left(){
        if(this.x > 0){
            this.setPosition(this.x -1, this.y);
        }
    }

    rigth(){
        if(this.x < this.table.cols){
            this.setPosition(this.x +1, this.y);
        }
    }

    setPosition(x, y){
        if(this.table.field[x][y] === ''){
            this.table.field[this.y][this.x] = '';
            this.x = x;
            this.y = y;
            this.table.field[this.y][this.x] = this.face;
            this.table.drawField();
            return true;
        }
        return false;
    }
}

class Player extends Character{
    constructor(field){
        super(field, 0, 0, 'O.o');
    }
}

class Npc extends Character{
    "use restrict";
    constructor(field){
        var x = Math.trunc(Math.random() * field.cols),
            y = Math.trunc(Math.random() * field.cols);

            super(field, x, y, '-_-');
            setInterval(this.walk.bind(this), 500);
    }

    walk(){
        var direction = Math.trunc(Math.random() * 4) + 1;
        switch(direction){
            case 1: this.up(); break;
            case 2: this.down(); break;
            case 3: this.rigth(); break;
            case 4: this.left(); break;
        }
    }
}

function StartField(){

    var cols = document.querySelector("#cols").value || 3,
        rows = document.querySelector("#rows").value || 3;

    document.querySelector('button').disabled = true;

    field = new Field(cols, rows, '#myTable');
    try{
        player = new Player(field);
    }
    catch(error){
        console.log('starting field again');
        StartField();
    }
}

window.addEventListener('keyup', function(event){
    if(player){
        debugger
        const a = 65,
              s = 83,
              d = 68,
              w = 87;
        //a,s,d,w
        switch(event.keyCode){
            case a: player.left(); break;
            case s: player.down(); break;
            case d: player.rigth(); break;
            case w: player.up(); break;
        }
    }
});
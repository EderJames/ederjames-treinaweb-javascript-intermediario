class Animal{
    static teste(){
        console.log('teste estático');
    }
    sleep(){
        console.log('zzzzzzzzzz');
    }
}

class Dog extends Animal {
    barck(){
        console.log('wooof');
    }

    sleep(){
        console.log('the dog will sleep');
        super.sleep();
    }
}

var myDog = new Dog();
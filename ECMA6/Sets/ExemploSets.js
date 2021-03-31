var mySet = new Set();

var a = { myValue: 1 },
    b = { myValue: 2 };

    mySet.add(a);
    mySet.add(b);
    mySet.add(a);
    mySet.add(1, 1);
    mySet.add("2", 2);
    mySet.add(true, 5);
    

    //Outra forma de criar um set:

    mySet = new Set( [ a, b ] );
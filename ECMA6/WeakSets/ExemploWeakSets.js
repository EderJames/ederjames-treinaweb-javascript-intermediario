var mySet = new WeakSet();

var a = { myValue: 1 },
    b = { myValue: 2 };

    mySet.add(a);
    mySet.add(b);
    mySet.add(a);

    //Outra forma de criar um set:

    mySet = new Set( [ a, b ] );
function double(number){
    
    if(typeof number !== 'number')
        throw new Error(`Value expected: number. Value recived: ${typeof number}`);

    return number*2;
}

try{
    double('abc');
}
catch(error){
    console.log(error);
    console.log(double(3));
}
finally{
    console.log('finish');
}
function double(number){
    if(typeof number !== 'number')
        throw new Error(`Value expected: number. Value recived: ${typeof number}`);

    return number*2;
}

double('ll');
double(4);
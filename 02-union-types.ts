/**
 * Soms zijn meerdere types mogelijk. Voor die situaties heeft TypeScript support voor "union" types.
 */










type SimpleValue = string | number;






















function dump(value: SimpleValue) {
    if(typeof value === 'string') {
        console.log('Message: ' + value);
    } else {
        console.log('Number: ' + value);
    }
}

















dump("thing");
dump(90);
dump(true);

















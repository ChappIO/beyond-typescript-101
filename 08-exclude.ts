






type SimpleValue = boolean | string | number;


function run(data: SimpleValue) {
    if (typeof data === 'number') {
        throw new Error('CANNOT CALL WITH NUMBER')
    }
    console.log(data);
}























type NotNumber<T> = T extends number ? never : T;


type NonNumberValue = NotNumber<SimpleValue>;


















function safeRun(data: NonNumberValue) {
    console.log(data);
}

safeRun(5);


















type Without<T, U> = T extends U ? never : T;
type NonNumberValue2 = Without<SimpleValue, number>



/**
 * In SDK: Exclude<T, U>
 */











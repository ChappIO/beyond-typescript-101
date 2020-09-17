/**
 * Uiteraard wil je ook zelf types kunnen defineren.
 */


















interface ComplexObject {
    name: string;
    value: string;
}






















function toComplex(value: ComplexObject | string): ComplexObject {
    if (typeof value == 'string') {
        return {name: value, value};
    } else {
        return value;
    }
}


















const objectOne: ComplexObject = toComplex({
    name: 'Complex',
    value: 'Object'
});

const objectTwo: ComplexObject = toComplex('Simple');














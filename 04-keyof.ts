















interface MyObject {
    keyOne: string;
    keyTwo: string;
}



















function update(target: MyObject, key: keyof MyObject, value: string) {
    target[key] = value;
}





















const myObject: MyObject = {
    keyOne: 'one',
    keyTwo: 'two',
}

update(myObject, 'keyOne', 'replaced');

console.log(myObject);
// {
//   "keyOne": "replaced",
//   "keyTwo": "two",
// }











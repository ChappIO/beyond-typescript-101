/**
 * Uit de TypeScript SDK: Partial
 */




















interface Entity {
    name: string;
    description?: string;
}




















interface Mutations {
    name?: string;
    description?: string;
}

function naivePatch(target: Entity, changes: Mutations): Entity {
    return {...target, ...changes};
}

















const entity: Entity = {
    name: 'Super Fancy Entity'
}

const updated = naivePatch(entity, {description: 'I have updated the description!'});


console.log(updated);
// {
//     "name": "Super Fancy Entity",
//     "description": "I have updated the description!"
// }
























type keys = keyof Entity;

type EntityMutation = {
    [K in keys]?: Entity[K]
}

const mutatation: EntityMutation = {}




const mutatationTwo: EntityMutation = {
    description: 'Test'
}




const mutatationThree: EntityMutation = {
    nope: 'Test'
}
















type PartOf<T> = {
    [K in keyof T]?: T[K]
}



/**
 * In SDK: Partial<T>
 */



















function patch<T>(target: T, changes: PartOf<T>): T {
    return {...target, ...changes};
}














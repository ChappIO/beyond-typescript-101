



















interface Entity {
    id: number;
    name: string;
    description?: string;
}






















const entity: Entity = {
    id: 2,
    name: 'Super Fancy Entity'
}



type PartOf<T> = {
    [K in keyof T]?: T[K]
}



function patch<T>(target: T, changes: PartOf<T>): T {
    return {...target, ...changes};
}

patch(entity, {id: 5});

















type EditableKeys = 'name' | 'description'

type Mutation = {
    [K in EditableKeys]?: Entity[K]
}


function patch2(target: Entity, changes: Mutation): Entity {
    return {...target, ...changes};
}

patch2(entity, {description: 'New Value'});
patch2(entity, {id: 4});


















type OnlyProperties<T, K extends keyof T> = {
    [P in K]?: T[K]
}


function patch3<T, K extends keyof T>(target: T, changes: OnlyProperties<T, K>): T {
    return {...target, ...changes};
}


patch3<Entity, 'description' | 'name'>(entity, {description: 'New Value'});
patch3<Entity, 'description' | 'name'>(entity, {id: 4});




















type RequireProperties<T, K extends keyof T> = {
    [P in K]-?: T[K]
}




type UpdateDescription = RequireProperties<Entity, 'description'>

const updateDescription: UpdateDescription = {
    description: 'test',
}














type PickProperties<T, K extends keyof T> = {
    [P in K]?: T[K]
}


/**
 * In SDK: Pick<T, K>
 */
















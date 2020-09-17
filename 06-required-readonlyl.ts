










type RequireAllProperties<T> = {
    [P in keyof T]-?: T[P];
};



/**
 * In SDK: Required<T>
 */





















type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * In SDK: Readonly<T>
 */















/**
 * TypeScript is compatible met JavaScript. Dat wil zeggen dat JavaScript code ook valide TypeScript.
 *
 * TypeScript voegt alleen type annotations toe die gebruikt worden om de code op compile-time te valideren.
 */


















let myValue: string = 'hello'

// dit kan niet omdat myValue een 'string' is.
myValue = 4;






















let implicitValue = 'hello'

// dit kan ook niet omdat de type annotation ook afgeleid kan worden
implicitValue = true;
















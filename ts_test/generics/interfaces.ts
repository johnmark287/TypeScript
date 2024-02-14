interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

const myIdentity: GenericIdentityFn = identity;

// Another form of generic parameter for the whole interface

// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }

// const myIdentity: GenericIdentityFn<number> = identity;


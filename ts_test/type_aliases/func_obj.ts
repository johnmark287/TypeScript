// with functions and object type

type FunctionUser = {
    name: string,
    age: number
}

const user2: FunctionUser = {
    name: 'john',
    age: 17
}
function user(user: FunctionUser): void {
    console.log(`${user.name} is the username`);
}

user(user2);
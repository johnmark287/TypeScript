function identity<T>(arg: T): T {
    return arg;
}

const ans = identity<string>("Johnmark");
const res = identity<number>(21);

console.log(`NAME: ${ans} \n AGE: ${res}`);

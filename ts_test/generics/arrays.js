function loggingIdentity(args) {
    console.log(args.length);
    return args;
}
// Alternatively
// function loggingIdentity<T>(args: T[]): T[] {
//     console.log(args.length);
//     return args;
// }
var names = loggingIdentity(["John", "Mark", "Muhando"]);
var ages = loggingIdentity([17, 21, 44]);
console.log("NAMES: ".concat(names, " \n AGES: ").concat(ages));

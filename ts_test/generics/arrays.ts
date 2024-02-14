function loggingIdentity<T>(args: Array<T>): Array<T> {
    console.log(args.length);
    
    return args;
}



// Alternative function

// function loggingIdentity<T>(args: T[]): T[] {
//     console.log(args.length);
    
//     return args;
// }

const names = loggingIdentity(["John", "Mark", "Muhando"]);
const ages = loggingIdentity([17, 21, 44]);

console.log(`NAMES: ${names} \n AGES: ${ages}`);


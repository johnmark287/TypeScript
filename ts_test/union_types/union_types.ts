// Holds either of the types below
let someId: number | string

let email: string | null = null

// set when user logs in.
email = 'test@gmail.com'
// maybe user logged out, then set to null
email = null

// Now with type alias
type Id = number | string
let anotherId: Id

anotherId = 'cbwdubcuwdv'
anotherId = 5


// With function
function swaapId(id: Id): Id {
    // USe type guards
    if (typeof id === 'string') {
        // can use string methods only
        return parseInt(id)
    } else {
        // can use number methods only
        return id.toString()
    }
}

const id1 = '23'
const id2 = 5

console.log(swaapId(id1));
console.log(swaapId(id2));


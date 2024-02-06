
interface MyUser {
    // Typed interface
    type: 'user'
    username: string,
    email: string,
    id: Id
}

interface MyPerson {
    // Typed interface
    type: 'person'
    first_name: string,
    age: 23,
    id: Id
}

function logDetails(value: MyUser | MyPerson) {
    // Typed interface for checking
    if (value.type === 'user') {
        console.log(value.username, value.email);
    }
    if (value.type === 'person') {
        console.log(value.first_name, value.age);
    }
}

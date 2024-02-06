interface Author {
    name: string,
    age: number
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
}

const arrayPost: Post = {
    title: 'my post',
    body: 'some',
    tags: ['gaming', 'tech'],
    createdAt: new Date(),
    author: {
        name: 'johnmark',
        age: 21
    }
}

// with arrays

let post: Post[] = []

post.push(arrayPost)

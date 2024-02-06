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

const addPost: Post = {
    title: 'my post',
    body: 'some',
    tags: ['gaming', 'tech'],
    createdAt: new Date(),
    author: {
        name: 'johnmark',
        age: 21
    }
}

// Function args types

function createPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}`);
    
}

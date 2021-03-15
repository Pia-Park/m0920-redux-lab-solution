import { v4 as uuidv4 } from 'uuid'

const initState = {
    posts: [
        {id: uuidv4(), author: 'user-1', title: 'Post 1' }
    ]
}
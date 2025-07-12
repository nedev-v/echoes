

export type User = {
    username: string,
    followers: string[],
    following: string[],
    echoes: Voice[]
}

export type Voice = {
    id: string,
    description: string,
    timestamp: Date,
    audioUrl: string,
    echoes: number,
    comments: Comment[],
    userId: string
}

export type Comment = {
    timestamp: Date,
    audioUrl: string,
    echoes: number
    userId: string,
    text: string
}
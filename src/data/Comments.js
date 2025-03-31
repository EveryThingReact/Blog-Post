export const getCommentsData = async () => {
    return [
        {
            _id:"10",
            user:{
                _id:"a",
                name:"Jone Doe",
            },
            desc:"it was a nice post, thank you!",
            post:"1",
            parent:null,
            replyOnUser: null,
            createdAt:"2024-12-31T17:22:05.092+0000",
        },
        {
            _id:"11",
            user:{
                _id:"b",
                name:"Mary jones",
            },
            desc:"a reply for John",
            post:"1",
            parent:"10",
            replyOnUser: "a",
            createdAt:"2024-12-31T17:22:05.092+0000",
        },
        {
            _id:"12",
            user:{
                _id:"b",
                name:"Paul M. Willson",
            },
            desc:"keep it up man. you got this",
            post:"1",
            parent:null,
            replyOnUser: null,
            createdAt:"2024-12-31T17:22:05.092+0000",
        },
        {
            _id:"13",
            user:{
                _id:"c",
                name:"Jessica M. Stepnie",
            },
            desc:"it's really intressting reading your contents",
            post:"1",
            parent:null,
            replyOnUser: null,
            createdAt:"2024-12-31T17:22:05.092+0000",
        },
    ]
}
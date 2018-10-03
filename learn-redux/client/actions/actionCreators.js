//increment


export function increment(index) {
    return {
        type: ' INCREMENT LIKES',
        index
    }
}
//add comment
export function addComment(postId, author, comment){
    return {
        type: 'ADD COMMENT',
        postId,
        author,
        comment
    }
}


//remove comment

export function removeComment(postId, i){
    return {
        type: 'REMOVE COMMENT',
        postId,
        i
    }
}
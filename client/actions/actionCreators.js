export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}


export function addComment(postCode, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postCode,
        author,
        comment
    };
}


export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    };
}

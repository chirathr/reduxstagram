export default function comments(state={}, action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            console.log(action);
            const postCode = action.postCode;
            const user = action.author;
            const text = action.comment;
            console.log(postCode, text, user);
            return {
                ...state,
                [postCode]: [
                    ...state[postCode], {
                        text,
                        user
                    }
                ]
            };
        default:
            return state;
    }
}

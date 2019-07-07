export const questionsReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_QUESTIONS_SUCCESS':
            return action.questions;

        case 'FETCH_QUESTIONS_FAILURE':
            return state;

        default: return state;
    }
}

export const userReducer = (state = { userName: '', email: '' }, action) => {

    switch (action.type) {
        case 'SET_USERINFO':
        case 'GET_USERINFO':
        case 'DELETE_USERINFO':
            const { userName, email } = action.userInfo;
            return {
                userName,
                email
            };

        default: return state;
    }
}

export const resultReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ASSESSMENT_RESULTS': return action.completed

        case 'RESET_ASSESSMENT_RESULTS': return false;

        default: return state;
    }
}

export const timeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TIME': return action.timeStamp

        case 'STOP_TIME': return 0

        default: return state;
    }
}
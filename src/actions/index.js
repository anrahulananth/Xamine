import axios from 'axios';

/* time */
export const setTime = (timeStamp) => ({
    type: 'SET_TIME',
    timeStamp
});

export const stopTime = () => ({
    type: 'STOP_TIME'
});

export const completedAssessment = (correctAnswers) => ({
    type: 'SHOW_ASSESSMENT_RESULTS',
    correctAnswers
});

export const resetAssessment = () => ({
    type: 'RESET_ASSESSMENT_RESULTS',
});

/* Actions wrt Questions */
export const fetchQuestionsSuccess = (questions) => ({
    type: 'FETCH_QUESTIONS_SUCCESS',
    questions
});

export const fetchQuestionsFailure = (err) => ({
    type: 'FETCH_QUESTIONS_FAILURE',
});

export const fetchQuestions = () => {
    return dispatch => {
        axios
            .get(`/questions.json`)
            .then(res => {
                dispatch(fetchQuestionsSuccess(res.data.questions));
            })
            .catch(err => {
                dispatch(fetchQuestionsFailure(err.message));
            });
    };
}

/* User info */
export const getUserInfo = () => {
    return dispatch => {
        let userInfo = sessionStorage.getItem('userInfo');
        if (!userInfo) {
            userInfo = { userName: '', email: '' };
            dispatch({
                type: 'GET_USERINFO',
                userInfo
            });
        } else {
            userInfo = JSON.parse(userInfo);
            dispatch({
                type: 'GET_USERINFO',
                userInfo
            });
            dispatch(fetchQuestions());
        }
    }
};

export const submitUserInfo = (userInfo, questions) => {
    return dispatch => {
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        dispatch({
            type: 'SET_USERINFO',
            userInfo
        });
        !questions.length && dispatch(fetchQuestions());
    }
};

export const deleteUserInfo = () => {
    return dispatch => {
        sessionStorage.removeItem('userInfo');
        let userInfo = { userName: '', email: '' };
        dispatch({
            type: 'DELETE_USERINFO',
            userInfo
        });
        dispatch({
            type: 'RESET_ASSESSMENT_RESULTS'
        })
    }
};
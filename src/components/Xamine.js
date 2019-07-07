import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './Details';
import QuestionView from './QuestionView';
import Result from './Result';
import { getUserInfo, submitUserInfo, deleteUserInfo } from '../actions';

class Xamine extends Component {
    componentDidMount(){
        this.props.getUserInfo(this.props.questions);
    }

    handleSubmit = (userInfo) => {
        this.props.submitUserInfo(userInfo, this.props.questions);
    }

    handleReset = () => {
        this.props.deleteUserInfo();
    }

    render () {
        const { userInfo, completed, questions } = this.props;
        return (
            <div className="xamine">
                {userInfo.userName && userInfo.email ?
                    completed ?
                        <Result answeredCorrect={completed.correctAnswers} attempted={completed.attempted} handleReset={this.handleReset} /> :
                        questions.length ? <QuestionView /> : false
                    :
                    <Details handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        completed: state.completed,
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => {
            dispatch(getUserInfo());
        },
        submitUserInfo: (userInfo, questions) => {
            dispatch(submitUserInfo(userInfo, questions));
        },
        deleteUserInfo: ()=> {
            dispatch(deleteUserInfo())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Xamine);
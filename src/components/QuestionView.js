import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Timer from './Timer';
import { completedAssessment } from '../actions';

class QuestionView extends Component {
    state = {
        activeQuestion: 0,
        choiceArray: this.props.questions.map(() => { return false }),
    }

    handleChoice = (choice) => {
        let { choiceArray, activeQuestion } = this.state;
        choiceArray[activeQuestion] = choice;
        this.setState({
            choiceArray: choiceArray
        });
    }

    handlePrev = () => {
        const { activeQuestion } = this.state;
        if (activeQuestion > 0) {
            this.setState({
                activeQuestion: activeQuestion - 1
            });
        }
    }

    handleNext = () => {
        const { questions } = this.props;
        const { activeQuestion } = this.state;
        if (activeQuestion < questions.length - 1) {
            this.setState({
                activeQuestion: activeQuestion + 1
            });
        } else {
            this.handleCompleted();
        }
    }

    handleCompleted = () => {
        let { choiceArray } = this.state;
        const { questions } = this.props;
        choiceArray = choiceArray.filter((choice, index) => {
            if (choiceArray[index] !== false){
                return questions[index].answer === (choiceArray[index] + 1)
            } else {
                return false;
            }
        });
        this.props.completedAssessment(choiceArray.length);
    }

    render () {
        const { questions } = this.props;
        const { activeQuestion, choiceArray } = this.state;
        return (
            <div className="questionsView">
                <Timer handleCompleted={this.handleCompleted} />
                <Question choice={choiceArray[activeQuestion]} questionData={questions[activeQuestion]} handleChoice={this.handleChoice} />
                {activeQuestion ? <button className="prevQuestion" onClick={this.handlePrev}>Prev</button> : false}
                <button className="nextQuestion" onClick={this.handleNext}>{activeQuestion === questions.length - 1 ? 'Submit' : 'Next'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        completedAssessment: (correctAnswers) => {
            dispatch(completedAssessment(correctAnswers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);



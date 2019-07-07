import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Timer from './Timer';
import Button from '@material-ui/core/Button';
import { completedAssessment } from '../actions';
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles';

const StyledButton = withStyles({
    root: {
        margin: '30px 30px',
    },
})(Button);

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
            <Paper>
                <br/>
                <Timer handleCompleted={this.handleCompleted} />
                <Question number={activeQuestion} choice={choiceArray[activeQuestion]} questionData={questions[activeQuestion]} handleChoice={this.handleChoice} />
                {activeQuestion ? <StyledButton className="questionButton" variant="contained" color="primary" onClick={this.handlePrev}>Prev</StyledButton> : false}
                <StyledButton className="questionButton" variant="contained" color="primary" onClick={this.handleNext}>{activeQuestion === questions.length - 1 ? 'Submit' : 'Next'}</StyledButton>
                <br/>
                <br />
            </Paper>
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



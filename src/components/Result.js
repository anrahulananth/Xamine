import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
class Result extends Component {
    render () {
        const { answeredCorrect, attempted, handleReset, userInfo } = this.props;
        return (
            <Paper>
                <div className="reset">
                    {
                        attempted ? (
                            <h3>Dear {userInfo.userName}, You attempted <span className="correctAnswer">{attempted}</span> questions out of which <span className="correctAnswer">{answeredCorrect}</span> are answered correctly</h3>
                        ) : (
                                <h3>You have not attempted any answers</h3>
                            )
                    }
                    <Button variant="contained" color="primary" onClick={handleReset}>Reset</Button>
                </div>
            </Paper>
        )
    }
}
export default Result;
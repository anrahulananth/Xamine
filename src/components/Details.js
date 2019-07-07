import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default class Details extends Component {
    state = {
        userName: '',
        email: ''
    }

    handleDetailsSubmit = () => {
        this.props.handleSubmit(this.state);
        this.setState({
            userName: '',
            email: ''
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        const { userName, email } = this.state;
        return (
            <React.Fragment>
                <h1>Xamine</h1>
                <Paper>
                    <h3>Please Enter Your Details to Start the assessment</h3>
                    <h3>You will have 10 minutes to complete the assessment. If you refresh or go back or close the window your progress will be lost</h3>
                </Paper>
                <Paper>
                    <br />
                    <br />
                    <TextField
                        className="userName"
                        label="UserName"
                        name="userName"
                        value={userName}
                        onChange={this.handleChange}
                    ></TextField>
                    <br />
                    <br />
                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}>
                    </TextField>
                    <br />
                    <br />
                    <Button className="detailsSubmit" variant="contained" color="primary" onClick={this.handleDetailsSubmit}>Continue</Button>
                    <br />
                    <br />
                </Paper>
            </React.Fragment>
        );
    }
}


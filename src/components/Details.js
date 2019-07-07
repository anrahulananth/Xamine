import React, { Component } from 'react';

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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        const { userName, email } = this.state;
        return (
            <div className="userInfo">
                <h1>Please Enter Your Details to Start the assessment</h1>
                <h2>You will have 10 minutes to complete the assessment. If you refresh or go back or close the window your progress will be lost</h2>
                <label>UserName</label><input className="userName" type="text" name="userName" value={userName} onChange={this.handleChange}></input><br />
                <label>Email</label><input className="email" type="email" name="email" value={email} onChange={this.handleChange}></input><br />
                <button className="detailsSubmit" onClick={this.handleDetailsSubmit}>Continue</button>
            </div>
        );
    }
}


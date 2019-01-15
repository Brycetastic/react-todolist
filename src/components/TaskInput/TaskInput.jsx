import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskInput extends Component {
    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target.addtask.value);
        e.target.addtask.value = '';
    }

    render() {
        return (
            <form onSubmit={this.submit} >
                <input type="text" name="addtask" placeholder="Add your task here" />
                <input type="submit" value="add" />
            </form>
        );
    }
}

TaskInput.propTypes = {
    onSubmit: PropTypes.func,
};

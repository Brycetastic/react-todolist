import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskInput.module.css';

export default class TaskInput extends Component {
    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target.addtask.value);
        e.target.addtask.value = '';
    }

    render() {
        return (
            <form onSubmit={this.submit} className={styles.formWrapper}>
                <input type="text" name="addtask" placeholder="Add your task here" />
                <input type="submit" value="+" />
            </form>
        );
    }
}

TaskInput.propTypes = {
    onSubmit: PropTypes.func,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListInput.module.css';

export default class ListInput extends Component {
    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target.addlist.value);
        e.target.addlist.value = '';
    }

    render() {
        return (
            <form onSubmit={this.submit} className={styles.formWrapper}>
                <input type="text" name="addlist" placeholder="Add or search lists" />
                <input
                    type="submit"
                    value="+"
                    className={styles.inputButton}
                />
            </form>
        );
    }
}

ListInput.propTypes = {
    onSubmit: PropTypes.func,
};

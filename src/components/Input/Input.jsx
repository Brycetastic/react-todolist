import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ onSubmit }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(e.target.addtask.value);
        }} >
            <input type="text" name="addtask" placeholder="Add your task here" />
            <input type="submit" value="add" />
        </form>
    );
}

Input.propTypes = {
    onSubmit: PropTypes.func,
};

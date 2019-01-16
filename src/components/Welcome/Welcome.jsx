import React from 'react'
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

export default function Welcome (props) {
    return (
        <section className={styles.wrapper}>
            <h1>Welcome To My List Creator</h1>
            <p>Start by naming your first list on the right.</p>
        </section>
    )
}

Welcome.propTypes = {
    title: PropTypes.string,
    display: PropTypes.object,
    updateTask: PropTypes.func,
    removeTask: PropTypes.func,
};

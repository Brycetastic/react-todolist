import React from 'react'
import PropTypes from 'prop-types';
import { ListInput, List } from '../';
import styles from './ListSection.module.css';

export default function ListSection (props) {
    return (
        <section className={styles.listWrapper}>
            <h3>Todo Lists</h3>
            <ListInput onSubmit={ props.addList } />
            {Object.keys(props.lists).map((key) => (
                <List
                    key={key}
                    name={key}
                    completion={props.lists[key].percentComplete}
                    { ...props }
                />
            ))}
        </section>
    )
}

ListSection.propTypes = {
    lists: PropTypes.object,
    addList: PropTypes.func,
};

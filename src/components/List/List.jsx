import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './List.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function List (props) {
    return (
        <div className={classnames(styles.listWrapper, {
            [styles.listSelected]: props.selectedList === props.name,
        })}>
            <button
                onClick={() => props.selectList(props.name)}
                className={styles.listButton}
            >
                <div>
                    {props.completion === 1 ? <FontAwesomeIcon icon="check" /> : null}
                </div>
                <p>{props.name}</p>
            </button>
            <button
                className={styles.removeButton}
                onClick={() => props.removeList(props.name)}
            >
                <FontAwesomeIcon icon="minus" />
            </button>
        </div>
    )
}

List.propTypes = {
    name: PropTypes.string,
    completion: PropTypes.number,
    selectedList: PropTypes.string,
    selectList: PropTypes.func,
    removeList: PropTypes.func,
};

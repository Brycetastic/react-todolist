import React from 'react'
import PropTypes from 'prop-types';
import { TaskInput, Task } from '../';
import styles from './TaskSection.module.css';

export default function TaskSection (props) {
    return (
        <section className={styles.taskWrapper}>
            <h1>{props.title} List</h1>
            <TaskInput onSubmit={ props.updateTask } />
            {props.display.list.map((item) => (
                <Task
                    key={item.name}
                    updateTask={props.updateTask}
                    removeTask={props.removeTask}
                    { ...item }
                />
            ))}

            <p>
                {props.display.percentComplete === 1
                    ? 'Congratulations you finished!'
                    : 'Before you eat the elephant, make sure you know what parts you want to eat.'
                }
            </p>
        </section>
    )
}

TaskSection.propTypes = {
    title: PropTypes.string,
    display: PropTypes.object,
    updateTask: PropTypes.func,
    removeTask: PropTypes.func,
};

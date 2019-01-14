import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import Switch from '../Switch';

class TaskHandler extends Component {
    state = { on: this.props.completed }
    toggle = () => {
        this.setState(
            ({ on }) => ({on: !on}),
            () => this.props.onToggle(this.state.on),
        )
    }
    
    getStateAndHelpers() {
        return {
            on: this.state.on,
            toggle: this.toggle,
        }
    }
    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}

// render prop
function Task({ name, updatedTask, ...props }) {
    const onToggle = (on) => {
        // setTask
        updatedTask(name, on);
        console.log('onToggle', on)
    }

    return (
        <TaskHandler onToggle={ onToggle } { ...props } >
            {({ on, toggle }) => (
                <div className={styles.taskWrapper}>
                    <div>
                        <Switch on={on} onClick={toggle} />
                        <p>{name}</p>
                    </div>
                    <div>
                        <button aria-label="custom-button" onClick={toggle}>
                            {on ? 'on' : 'off'}
                        </button>
                    </div>
                </div>
            )}
        </TaskHandler>
    )
}

TaskHandler.propTypes = {
    onToggle: PropTypes.func,
    completed: PropTypes.bool,
};

Task.propTypes = {
    name: PropTypes.string,
    updatedTask: PropTypes.func,
};

export {TaskHandler, Task as default}

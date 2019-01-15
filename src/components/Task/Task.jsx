import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import Switch from '../Switch';

class TaskHandler extends Component {
    state = { on: this.props.completed }
    toggle = () => {
        this.setState(
            ({ on }) => ({on: !on}),
            () => this.props.updateTask(this.props.name, this.state.on),
        )
    }
    
    remove = () => {
        this.props.removeTask(this.props.name);
    }
    
    getStateAndHelpers() {
        return {
            on: this.state.on,
            onToggle: this.toggle,
            onRemove: this.remove
        }
    }
    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}

// render prop
function Task (props) {
    return (
        <TaskHandler { ...props } >
            {({ on, onToggle, onRemove }) => (
                <div className={styles.taskWrapper}>
                    <div>
                        <Switch on={on} onClick={onToggle} />
                        <p>{props.name}</p>
                    </div>
                    <div>
                        <button aria-label="custom-button" onClick={onRemove}>
                            remove
                        </button>
                    </div>
                </div>
            )}
        </TaskHandler>
    )
}

TaskHandler.propTypes = {
    name: PropTypes.string,
    completed: PropTypes.bool,
    updateTask: PropTypes.func,
    removeTask: PropTypes.func,
};

Task.propTypes = {
    name: PropTypes.string,
    updateTask: PropTypes.func,
    removeTask: PropTypes.func,
};

export {TaskHandler, Task as default}

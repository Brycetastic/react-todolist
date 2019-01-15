import React, { Component, Fragment } from 'react';
import { getTasks, setTasks, removeTask } from '../../api';
import { Title, Input, Task } from '../../components';

export default class Main extends Component {
    state = {
        taskList: getTasks(),
    }

    update = (name, completed = false) => {
        this.setState(({taskList}) => {
            const setTaskList = setTasks(taskList, name, completed);
            return ({
                myTasks: setTaskList(),
            })
        })
    }

    remove = (name) => {
        this.setState(({taskList}) => ({
            taskList: removeTask(taskList, name),
        }))
    }

    render() {
        return (
            <Fragment>
                <Title title="Hello" />
                <Input onSubmit={ this.update } />
                {this.state.taskList.map((item) => (
                    <Task
                        key={item.name}
                        updateTask={this.update}
                        removeTask={this.remove}
                        { ...item }
                    />
                ))}
            </Fragment>
        )
    }
}

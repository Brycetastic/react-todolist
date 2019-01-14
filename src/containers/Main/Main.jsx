import React, { Component, Fragment } from 'react';
import { getTasks, setTasks } from '../../api';
import { Title, Input, Task } from '../../components';

export default class Main extends Component {
    state = {
        myTasks: getTasks(),
    }

    updatedTasks = (name, completed = false) => {
        this.setState(({myTasks}) => ({
            myTasks: setTasks(myTasks, name, completed)()
        }))
    }

    render() {
        return (
            <Fragment>
                <Title title="Hello" />
                <Input onSubmit={ this.updatedTasks } />
                {this.state.myTasks.map((item) => (
                    <Task key={item.name} updatedTask={this.updatedTasks} { ...item } />
                ))}
            </Fragment>
        )
    }
}

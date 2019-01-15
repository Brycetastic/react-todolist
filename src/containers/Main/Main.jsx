import React, { Component } from 'react';
import { setStoredLists, getStoredLists } from '../../api';
import { updateTask, removeTask } from './helpers';
import { TaskSection, ListSection } from '../../components';
import styles from './Main.module.css';

export default class Main extends Component {
    state = getStoredLists()

    updateTask = (name, completed = false) => {
        this.setState(({myLists, selectedList}) => {
            const updatedList = updateTask(myLists[selectedList].list, name, completed);
            return ({
                myLists: {
                    ...myLists,
                    [selectedList]: updatedList(),
                }
            })
        }, () => setStoredLists(this.state))
    }

    removeTask = (name) => {
        this.setState(({myLists, selectedList}) => ({
            myLists: {
                ...myLists,
                [selectedList]: removeTask(myLists[selectedList].list, name),
            }
        }), () => setStoredLists(this.state))
    }

    selectList = (name) => {
        this.setState(
            {selectedList: name}, 
            () => setStoredLists(this.state)
        );
    }

    addList = (name) => {
        this.setState(({myLists}) => {
            const newLists = {...myLists};
            const isKeyFound = Object.keys(newLists).find((item) => item === name);
            newLists[name] = {
                list: [],
                percentComplete: 0,
            }

            return ({
                myLists: isKeyFound
                    ? {...myLists}
                    : {...newLists}
                ,
                selectedList: name,
            })
        }, () => setStoredLists(this.state))
    }

    removeList = (name) => {
        this.setState(({myLists, selectedList}) => {
            const newLists = {...myLists};
            delete newLists[name];

            return ({
                myLists: newLists,
                selectedList: selectedList === name ? Object.keys(newLists)[0] : selectedList,
            })
        }, () => setStoredLists(this.state))
    }

    render() {
        const { myLists, selectedList } = this.state;
        const display = myLists[selectedList];

        return (
            <div className={styles.mainWrapper}>
                <ListSection
                    lists={myLists}
                    selectedList={selectedList}
                    selectList={this.selectList}
                    addList={this.addList}
                    removeList={this.removeList}
                />
                <TaskSection
                    title={this.state.selectedList}
                    display={display}
                    updateTask={this.updateTask}
                    removeTask={this.removeTask}
                />
            </div>
        )
    }
}

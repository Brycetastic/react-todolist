import React, { Component } from 'react';
import { setStoredLists, getStoredLists } from '../../api';
import { updateTask, removeTask, addList } from './helpers';
import { TaskSection, ListSection, Welcome } from '../../components';
import styles from './Main.module.css';

export default class Main extends Component {
    state = getStoredLists()

    updateTask = (name, completed = false) => {
        if (name) {
            name = name.toLowerCase();
            this.setState(({myLists, selectedList}) => ({
                myLists: {
                    ...myLists,
                    [selectedList]: updateTask(myLists[selectedList].list, name, completed),
                }
            }), () => setStoredLists(this.state))    
        }
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
        if (name) {
            name = name.toLowerCase();
            this.setState(({myLists}) =>
                ({...addList(myLists, name)}), 
                () => setStoredLists(this.state)
            )
        }
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
        const display = myLists && myLists[selectedList];

        return (
            <div className={styles.mainWrapper}>
                <ListSection
                    lists={myLists}
                    selectedList={selectedList}
                    selectList={this.selectList}
                    addList={this.addList}
                    removeList={this.removeList}
                />
                {Object.keys(myLists).length > 0
                    ? <TaskSection
                        title={this.state.selectedList}
                        display={display}
                        updateTask={this.updateTask}
                        removeTask={this.removeTask}
                    />
                    : <Welcome />
                }
            </div>
        )
    }
}

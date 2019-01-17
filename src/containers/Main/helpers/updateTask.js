import { findCompletion } from './';

/**
 * updateTask will either add a new task to the list or
 * update completed status of said task
 * @param {Array} taskList task list
 * @param {String} name task to update
 * @param {Bool} completed is checked off
 */
export default function updateTask(taskList, name, completed) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].name === name) {
            taskList[i].completed = completed;
            return {
                list: taskList,
                percentComplete: findCompletion(taskList),
            }
        }
    }

    taskList.push({ name, completed });
    return {
        list: taskList,
        percentComplete: findCompletion(taskList),
    }
}

import { findCompletion } from './';

/**
 * ß
 * @param {Array} prevlist task list
 * @param {String} name taks to be removed
 */
export default function removeTask(prevlist, name) {
    const taskList = prevlist.filter((item) => item.name !== name)

    return {
        list: taskList,
        percentComplete: findCompletion(taskList),
    }
}

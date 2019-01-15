import { findCompletion } from './';

export default function removeTask(prevlist, name) {
    const taskList = prevlist.filter((item) => item.name !== name)

    return {
        list: taskList,
        percentComplete: findCompletion(taskList),
    }
}

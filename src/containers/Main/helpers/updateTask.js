import { findCompletion } from './';

export default function updateTask(taskList, name, completed) {
    return () => {
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
}

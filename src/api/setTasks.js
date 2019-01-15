export default function setTasks(taskList, name, completed) {
    return () => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].name === name) {
                taskList[i].completed = completed;
                window.localStorage.setItem('todoTasks', JSON.stringify(taskList));
                return taskList;
            }
        }

        taskList.push({ name, completed });
        window.localStorage.setItem('todoTasks', JSON.stringify(taskList));
        return taskList;
    }
}

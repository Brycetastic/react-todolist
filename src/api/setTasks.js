export default function setTasks(prevTasks, name, completed) {
    return () => {
        for (let i = 0; i < prevTasks.length; i++) {
            if (prevTasks[i].name === name) {
                prevTasks[i].completed = completed;
                window.localStorage.setItem('todoTasks', JSON.stringify(prevTasks));
                return prevTasks;
            }
        }

        prevTasks.push({ name, completed });
        window.localStorage.setItem('todoTasks', JSON.stringify(prevTasks));
        return prevTasks;
    }
}
            
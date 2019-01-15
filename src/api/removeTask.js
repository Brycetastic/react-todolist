export default function removeTask(prevlist, name) {
    const taskList = prevlist.filter((item) => item.name !== name)

    console.log('taskList =', taskList);
    
    window.localStorage.setItem('todoTasks', JSON.stringify(taskList));
    return taskList
}

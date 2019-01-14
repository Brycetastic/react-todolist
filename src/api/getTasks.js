export default function getTasks() {
    return JSON.parse(window.localStorage.getItem('todoTasks')) || [];
}
            
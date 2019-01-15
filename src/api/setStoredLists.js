export default function getStoredLists(obj) {
    window.localStorage.setItem('storedTodos', JSON.stringify(obj));
}
            
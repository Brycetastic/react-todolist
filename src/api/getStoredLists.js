// const fake = {
//     myLists: {
//         bryce: {
//             list: [{
//                 name: "why isn't this done", completed: false
//             },{
//                 name: "finish todo list", completed: false
//             }],
//             percentComplete: 0,
//         },
//         tara: {
//             list: [{
//                 name: "go to pilates", completed: true
//             },{
//                 name: "get gas", completed: false
//             },{
//                 name: "get celary", completed: false
//             }],
//             percentComplete: 0,
//         },
//     },
//     selectedList: 'tara',
// }

export default function getStoredLists() {
    const storedTodos = JSON.parse(window.localStorage.getItem('storedTodos'));

    return storedTodos
        ? { ...storedTodos }
        : {myLists: {}}
}
            
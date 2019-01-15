export default function findCompletion(list) {
    let numCompleted = 0;
    list.forEach(({completed}) => completed ? numCompleted += 1 : null)

    return (numCompleted / list.length)
}

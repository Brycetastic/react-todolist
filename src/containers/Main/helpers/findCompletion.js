/**
 * findCompletion takes an array and counts number of completed tasks
 * to find the percent of the list completed
 * @param {Array} list
 * @return {Number}
 */
export default function findCompletion(list) {
    let numCompleted = 0;
    list.forEach(({completed}) => completed ? numCompleted += 1 : null)

    return (numCompleted / list.length)
}

/**
 * addList doesn't only add another list object but
 * if list is already created it will auto select the list provided
 * @param {Object} prevlist object of all lists
 * @param {String} name list to add and/or be selected
 */
export default function addList(prevlist, name) {
    const newLists = {...prevlist};
    const isKeyFound = Object.keys(newLists).find((item) => item === name);
    newLists[name] = {
        list: [],
        percentComplete: 0,
    }

    return ({
        myLists: isKeyFound
            ? {...prevlist}
            : {...newLists}
        ,
        selectedList: name,
    })
}

import { v4 as uuidv4 } from 'uuid';
export function getSelectorList(rootList, param) {
    let listArray = Array.from(new Set(rootList.map(item => item[param])))
    let formedList = listArray.map(item => {
        return { id: uuidv4(), type: item }
    })
    return formedList
}

// export function selectFilter(currentItem, all, nobody, filteredList, propName) {
//     if (currentItem !== all && currentItem !== nobody) {
//         filteredList = filteredList.filter(i =>
//             i[propName] === currentItem
//         )
//         return filteredList
//     }
// }
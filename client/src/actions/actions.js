import { CONSTANTS } from "../types/types";

export function addList(){
    return distpath => {
        try {
            distpath({
                type: CONSTANTS.ADD_LIST,
            });
        } catch (error) {
            console.log(error)
        }
    }  
}

// export function addCard(listId, text) {
//     console.log(listId, text)
//     return distpath => {
//         distpath({
//             type: CONSTANTS.ADD_CARD,
//             payload: {listId, text}
//         });
//     }
// }

export function addCard(listId, text){
    return distpath => {
        try {
            distpath({
                type: CONSTANTS.ADD_CARD,
                payload: {listId, text}
            });
        } catch (error) {
            console.log(error)
        }
    }  
}
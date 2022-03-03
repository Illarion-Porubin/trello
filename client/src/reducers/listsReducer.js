import { CONSTANTS } from "../types/types";

let _id = 3;


const initialState = {
    lists: [
        {
            title: "IN PROGRESS",
            listId: 0,
            cards: [
                {
                    id: 0,
                    text: "created static 1"
                },
                {
                    id: 1,
                    text: "created static 2"
                },
                {
                    id: 2,
                    text: "created static 3"
                },
            ]
        },
        {
            title: "TO DO",
            listId: 1,
            cards: [
                {
                    id: 0,
                    text: "created static 1"
                },
                {
                    id: 1,
                    text: "created static 2"
                },
                {
                    id: 2,
                    text: "created static 3"
                },
                {
                    id: 3,
                    text: "created static 4"
                },
                {
                    id: 4,
                    text: "created static 5"
                }
            ]
        },
    ]
}

export const listsReducer = (state = initialState, action) => {

    // const { payload } = action;
    // const { lists } = state;

    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: "NEW_LIST",
                listId: _id,
                cards: [{
                    id: 0,
                    text: "created static 1"
                }]
            }
            _id += 1
            return { ...state, lists: [...state.lists, newList] }

        case CONSTANTS.ADD_CARD: 
            const newCard = {
                id: _id,
                text: action.payload.text,
            }
            _id += 1

            const newState = state.lists.map(list => {
                if(list.listId === action.payload.listId){
                    return {...list, cards: [...list.cards, newCard]}
                    
                } 
                else{
                    return list
                }
            })
            // console.log({...state})
            // console.log({lists: newState})
            return { lists: newState }

        default:
            return state;
    }
}


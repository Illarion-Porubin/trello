import React from "react";
import TrelloList from "../trelloList/trelloList";
import Sidebar from "../sidebar/sidebar"
import { useSelector } from 'react-redux'
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import './App.css';


function App(){
  const lists = useSelector(state => {
    const { listsReducer } = state;
    console.log(listsReducer.lists, "app")
    return listsReducer.lists
  })

  return (    
    <div className="listConteiner">
      <Sidebar/>
      {lists.map((list) =>
        <TrelloList 
          _id={list.listId} 
          key={list.listId} 
          title={list.title} 
          cards={list.cards}
        />
      )}
      <TrelloActionButton list/>
    </div>
  )
}


export default App;

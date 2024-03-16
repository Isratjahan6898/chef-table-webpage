
import { useState } from 'react'
import './App.css'
import Cooks from './Components/Cooks/Cooks'
import Foods from './Components/Foods/Foods'
import Header from './Components/Header/Header'

function App() {

  const[items , setItems]= useState([]);

  const handleAddToFoodCard = food =>{
    //console.log(food)
    const newFoodCard = [...items,food];
    setItems(newFoodCard);

  }
    

  const handleAnotherButton=(id)=>{
    //console.log(id);

    const newCard = items.filter(item =>item.recipe_id!==id);
    console.log(newCard);
    setItems(newCard);
  }
  return (
    <>
    <Header></Header>
    <div className='mx-[100px] flex'>
    <Foods  handleAddToFoodCard={ handleAddToFoodCard}></Foods>
    <Cooks handleAnotherButton={handleAnotherButton} items={items}></Cooks>
    </div>
   
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Cooks from './Components/Cooks/Cooks'
import Foods from './Components/Foods/Foods'
import Header from './Components/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const[items , setItems]= useState([]);
  

  const handleAddToFoodCard = (food) =>{
    //console.log(food)
    //const newFoodCard = [...items,food];

    const isExist= items.find(item =>item.id ===food.id);
    console.log(isExist);
    if(!isExist){
      setItems([...items,food]);
    }

    else{
      toast.warn("its already exit!")
    }
    //setItems([...items,food]);
  }
    

  const handleAnotherButton=(id)=>{
   
    //console.log(id);
    const newCard = items.filter(item =>item.id!==id);
    //console.log(newCard);
    setItems(newCard);
  }
  return (
    <>
    <Header></Header>
    <div className='mx-[100px] flex'>
    <Foods  handleAddToFoodCard={ handleAddToFoodCard}></Foods>
    <Cooks handleAnotherButton={handleAnotherButton}  items={items}></Cooks>
    

    <ToastContainer />
    </div>
    
   
    </>
  )
}

export default App; 

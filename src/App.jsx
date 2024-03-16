
import './App.css'
import Cooks from './Components/Cooks/Cooks'
import Foods from './Components/Foods/Foods'
import Header from './Components/Header/Header'

function App() {
  
  return (
    <>
    <Header></Header>
    <div className='mx-[100px] flex'>
    <Foods></Foods>
    <Cooks></Cooks>
    </div>
   
    </>
  )
}

export default App

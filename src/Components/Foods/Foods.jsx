import { useEffect, useState } from "react";
import Food from "../Food/Food";


const Foods = () => {
    const [foods, setFoods]= useState([]);

    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data =>setFoods(data))
    },[])

    return (
        <div className="w-2/3 grid grid-cols-2 gap-[16px]">
            {/* <h1>food:{foods.length}</h1> */}
            {
                foods.map(food =><Food food={food}></Food>)
            }
            
        </div>
    );
};

export default Foods;
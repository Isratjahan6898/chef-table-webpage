import { useEffect, useState } from "react";


const Foods = () => {
    const [foods, setFoods]= useState([]);

    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data =>setFoods(data))
    },[])

    return (
        <div className="">
            <h1>all food</h1>
            
        </div>
    );
};

export default Foods;
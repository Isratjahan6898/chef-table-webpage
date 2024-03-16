import Ingredient from "../Ingredient/Ingredient";
import { RiFireLine } from "react-icons/ri";
import { CiClock1 } from "react-icons/ci";


const Food = ({food}) => {
    //console.log(food);

    const{recipe_image, recipe_name, short_description, ingredients, preparing_time, calories}= food;
    return (
        <div>
            <div className="card h-[632px] bg-base-100 shadow-xl">
  <figure><img className="w-[300px] h-[200px] mt-[20px]" src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="">{short_description}</p>
    <hr></hr>

     <p>Ingredents:{ingredients.length}</p>
    {ingredients.map(ingredient => <Ingredient ingredient={ingredient}></Ingredient>)}

    <hr></hr>

    <div className="flex">
        <p className="flex"><button><CiClock1 /></button><span>{preparing_time}</span>minutes</p>
        <p className="flex"><button><RiFireLine /></button><span>{calories}</span>claories</p>
    </div>
    <div className="card-actions">
      <button className="rounded-full bg-[#0BE58A] p-[10px] mt-[24px]">Want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Food;
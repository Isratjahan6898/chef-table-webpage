

const Ingredient = ({ingredient}) => {
    console.log(ingredient)
    return (
        <div>
            <ul className="list-disc">
                <li>{ingredient}</li>
            </ul>
            
        </div>
    );
};

export default Ingredient;


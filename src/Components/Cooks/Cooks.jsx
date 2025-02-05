import Cook from "../Cook/Cook";




const Cooks = ({items,handleAnotherButton}) => {
    return (
        <div className="w-1/3 border-black border-[1px]">
            <h1 className="text-center text-2xl font-semibold mb-[10px]">Want to cook:{items.length}</h1>
            <hr></hr>



            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  
  </table>
</div>

            {
                items.map( (item ,index) =><Cook handleAnotherButton={handleAnotherButton} item={item} index={index}></Cook>)
            }
           
            <h1 className="text-center text-2xl font-semibold mb-[10px]">Curently Cook:</h1>
            <hr></hr>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  
  </table>
</div>
       
           <div className="flex gap-[100px]">
            <h1>Total time:</h1>
            <h1>total Calories:</h1>
           </div>
  


          
            </div>
    );
};

export default Cooks;
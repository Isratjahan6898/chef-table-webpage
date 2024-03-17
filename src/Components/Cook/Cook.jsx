

const Cook = ({item, index, handleAnotherButton}) => {

    //console.log(item, index)
    const {recipe_name, preparing_time, calories, id} =item;
    return (
        <div>

<div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button onClick={()=>handleAnotherButton(id)} className="rounded-full bg-[#0BE58A] p-[10px]">prepare</button>
      </tr>
     
    </tbody>
  </table>
</div>

            </div>
            
        </div>
    );
};

export default Cook;
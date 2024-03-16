import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import profile from '../../assets/image/Untitled design.png'

const Header = () => {
    return (
        <div className="mx-[100px]">

           <div className="flex justify-between mt-[50px]">
           <div>
                <h1 className="font-bold text-3xl">Recipe Calories</h1>
            </div>

            <div className="flex gap-[10px]">
                <p className="text-slate-500">Home</p>
                <p className="text-slate-500">Recipes</p>
                <p className="text-slate-500">About</p>
                <p className="text-slate-500">Search</p>
                
            </div>

            <div className="flex gap-[10px]">
                <button className="flex w-[200px] h-[40px] rounded-full p-[10px] bg-slate-300"><CiSearch />Sreach</button>
                <button className="text-4xl text-lime-800"><IoMdContact/></button>
            </div>

           </div>

              
              <div className="mt-[50px] mb-[50px]">

              <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/HCJVwfd/Untitled-design.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="">
    <div className="">
      <h1 className="mx-[200px] text-4xl text-white font-bold">Discover an exceptional cooking<br></br> class tailored for you! </h1>
      <p className="text-white mx-[200px] mt-[24px]">Cooking, the act of using heat to prepare food for consumption. Cooking is as old as civilization itself, and observers have perceived it as both an art and a science.</p>
      <div className="">
      <button className="rounded-full bg-[#0BE58A] p-[20px] ml-[400px] mr-[30px] mt-[24px]">Explore Now</button>
      <button className="rounded-full bg-[#FFFFFF] p-[20px]  mt-[24px]">Our FeedBack</button>
      </div>
    </div>
  </div>
</div>
          
              </div>


              <div>
                <h1 className="text-4xl text-center mb-[24px] font-semibold ">Our Recipes</h1>

                <p className="text-center text-slate-500 mb-[50px]">A recipe is simply defined as a set of instructions with a list of ingredients used to prepare a particular food, dish or drink. People use recipes to replicate foods they enjoy that they otherwise do not know how to make. Chefs use recipes to make sure a dish tastes the same each time it is ordered.</p>
              </div>

    
           
            </div>
            
       
    );
};

export default Header;
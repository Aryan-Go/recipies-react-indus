import React, { useContext,useState }  from 'react'
import { useNavigate, useParams,Outlet } from 'react-router-dom'
import { todoWrapper } from '../Wrapper.jsx'

const Recipies = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { name } = params;
    const {recipies, set_recipies} = useContext(todoWrapper);
    const food = recipies.filter((x) => x.name === name)[0];
    console.log(food);
    const food_recipes_steps = food.recipies;
    const [color, set_color] = useState("bg-amber-50")
    // const handleDone = (index) => {
    //     set_color("bg-green-200");
    // }
    const recipies_list = food_recipes_steps.map((step, index) => {
    return (
        <div key={index} className= {`p-[2rem] m-[2rem] rounded-xl ${color}`}>
            <p key={index} className="text-[2rem]">{step}</p>
            {/* <button onClick={() => handleDone(index)} className="bg-amber-400 text-white p-[0.8rem] m-[1rem] rounded-md">Done this step</button> */}
        </div>
        )
    })
    return (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold p-[2rem]">{food.name}</h1>
          <div className="flex flex-col justify-around items-center">
              <img src={food.url} alt={food.name} className="w-[80%] rounded-md p-[3rem]" />
              <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Recepie of {food.name}</h1>
                    <div className="flex flex-row">
                        <button onClick={() => navigate(`/about/${name}/form`)} className="bg-amber-400 text-white p-[0.8rem] m-[1rem] rounded-md">Update this recipie</button>
                        <button onClick={() => navigate(-1)} className="bg-amber-400 text-white p-[0.8rem] m-[1rem] rounded-md">Go back to home page</button>
                    </div>
                    <Outlet />
                  <div className="flex flex-col">{recipies_list }</div>
              </div>
          </div>
    </div>
  )
}

export default Recipies
import React, { useContext,useState,useEffect }  from 'react'
import { useNavigate, useParams,Outlet } from 'react-router-dom'
import { todoWrapper } from '../Wrapper.jsx'
import axios from "../axios_app/app_axios.jsx"

const Recipies = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { name } = params;
    const [color, set_color] = useState("bg-amber-50")
    const [food_recipies_steps , set_food_rec_steps] = useState([])
    const [food , set_food] = useState()
    useEffect(() => {
        const get_reci = async () => {
            const recipies = await axios.get("get_reci");
            const data = recipies.data.message
            const matchedFood = data.filter((x) => x.name === name)[0]
            set_food(matchedFood);
            set_food_rec_steps(matchedFood.recipes_array || []);
            
        }
        get_reci()
    },[])
    const recipies_list = food_recipies_steps.map((step, index) => {
    return (
        <div key={index} className= {`p-[2rem] m-[2rem] rounded-xl ${color}`}>
            <p key={index} className="text-[2rem]">{step}</p>
            {/* <button onClick={() => handleDone(index)} className="bg-amber-400 text-white p-[0.8rem] m-[1rem] rounded-md">Done this step</button> */}
        </div>
        )
    })
    return (
        <div className="flex flex-col justify-center items-center">
            {food &&
                (
                <>
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
                </>
            )
            }
          
    </div>
  )
}

export default Recipies
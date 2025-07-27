import React,{useEffect} from 'react'
import { useContext } from 'react'
import { todoWrapper } from '../Wrapper.jsx'
import { Bounce,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from "../axios_app/app_axios.jsx"

const About = () => {
    const navigate = useNavigate();
    const {recipies, set_recipies,favourites,set_favourites} = useContext(todoWrapper);
    console.log(recipies);
    const handleClicking = (name) => {
        toast.success(`Hmmm... tasty tasty ${name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigate(`/about/${name}`);
    }
    const recipie_cards = recipies.map((food, index) => {
        return (
            <div key={index} className="flex flex-col items-center flex-wrap justify-around bg-amber-50 w-[25rem] p-[1rem] m-[2rem] rounded-xl">
                <h1 className="text-[2.5rem] font-bold">{food.name}</h1>
                <div className="flex flex-col items-center">
                    <img alt={food.name} src={food.url} className="w-[20rem]" />
                    <h2>{food.rating}/10</h2>
                    <p>{food.description}</p>
                    <button onClick={() => handleClicking(food.name)} className="bg-amber-400 w-[50%] text-white p-[0.8rem] m-[1rem] rounded-md">Learn More</button>
                    <button onClick={() => handleFav(food)} className="bg-amber-400 w-[50%] text-white p-[0.8rem] m-[1rem] rounded-md">Add To Favourites</button>
                </div>
            </div>
        )
    })
    useEffect(() => {
        const get_recipies = async () => {
            const response = await axios.get("get_reci")
            set_recipies(response.data.message)
        }
        get_recipies()
    },[])
    const handleFav = async(food) => {
        const food_item_fav = recipies.filter((x) => x === food)[0];
        await axios.post("gf", {fav : food_item_fav});
        const response = await axios.get("bf");
        await set_favourites(response.data.message);
        console.log("Data has been sent  " , response)
        toast.success(`Hmmm... tasty tasty ${food.name} has been added to your favourites. Double mazza`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigate(`/`);
    }
    return (
      <>
            <h1 className="text-center text-[5rem]">Let's meet some recipies</h1>
            <div className="flex flex-row justify-between flex-wrap">
                {recipie_cards}
            </div>
      </>
  )
}

export default About
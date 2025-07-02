import React from 'react'
import { useContext } from 'react'
import { todoWrapper } from '../Wrapper.jsx'
import { Bounce,toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Favourites = () => {
    const navigate = useNavigate();
    const {favourites,set_favourites} = useContext(todoWrapper);
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
    const recipie_cards = favourites.map((food, index) => {
        return (
            <div key={index} className="flex flex-col items-center flex-wrap justify-around bg-pink-50 w-[25rem] p-[1rem] m-[2rem] rounded-xl">
                <h1 className="text-[2.5rem] font-bold">{food.name}</h1>
                <div className="flex flex-col items-center">
                    <img alt={food.name} src={food.url} className="w-[20rem]" />
                    <h2>{food.rating}/10</h2>
                    <p>{food.description}</p>
                    <button onClick={() => handleClicking(food.name)} className="bg-pink-400 w-[50%] text-white p-[0.8rem] m-[1rem] rounded-md">Learn More</button>
                </div>
            </div>
        )
    })
    return (
      <>
            <h1 className="text-center text-[5rem]">Let's keep favorite recipies in a safe place</h1>
            <div className="flex flex-row justify-between flex-wrap">
                {recipie_cards}
            </div>
      </>
  )
}

export default Favourites
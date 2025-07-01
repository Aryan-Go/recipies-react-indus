import React, { useState } from 'react'
import { useContext } from 'react'
import { todoWrapper } from '../Wrapper.jsx'
import { Bounce,toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


const Any = () => {
    const navigate = useNavigate();
    const [recipies, set_recipies] = useContext(todoWrapper);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [url, setUrl] = useState("");
    const [steps, setSteps] = useState([]);
    const handleClicking = () => {
        const stepArray = steps.split(";");
        const food_item = {
            name: name,
            description: description,
            rating: rating,
            url: url,
            recipies: stepArray
        }
        set_recipies((prev) => {
            return [...prev, food_item];
        })
        toast.success(`${name} added. A new dish in the house`, {
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
        setName("");
        setUrl("");
        setDescription("");
        setRating("");
        setSteps("");
        navigate("/about");
    }
    // console.log(name);
  return (
      <>
          <h1 className="text-center p-[1rem] text-[5rem] font-bold">Add a new recipie</h1>
          <div className="flex flex-col items-center justify-center">
              <label className="text-[2rem] m-[2rem]" htmlFor="name">Name of the dish</label><br></br>
              <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="invalid:outline-red-500 valid:outline-green-500 text-[2rem] px-[1rem] w-[80%] m-[2rem]  border-b-2 focus:border-0" name="name"></input><br/>

              <label className="text-[2rem] m-[2rem]" htmlFor="desc">Description of the dish</label><br></br>
              <textarea required value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="invalid:outline-red-500 valid:outline-green-500 text-[2rem] px-[1rem] w-[80%] m-[2rem] border-2 h-[10rem] focus:border-0" name="desc"></textarea><br/>

              <label className="text-[2rem] m-[2rem]" htmlFor="rate">Rating of the dish</label><br></br>
              <input required type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} className="invalid:outline-red-500 valid:outline-green-500 text-[2rem] px-[1rem] w-[80%] m-[2rem]  border-b-2 focus:border-0" name="rate"></input><br/>

              <label className="text-[2rem] m-[2rem]" htmlFor="url">url of image of the dish</label><br></br>
              <input required type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="invalid:outline-red-500 valid:outline-green-500 text-[2rem] px-[1rem] w-[80%] m-[2rem]  border-b-2 focus:border-0" name="url"></input><br/>

              <label className="text-[2rem] m-[2rem]" htmlFor="name">Steps of the dish</label><br></br>
              <input required value={steps} onChange={(e) => setSteps(e.target.value)} type="text" className="invalid:outline-red-500 valid:outline-green-500 text-[2rem] px-[1rem] w-[80%] m-[2rem]  border-b-2" name="name" placeholder="Each step seperated by semmicolon and no semicolon in the step"></input><br />
              <button onClick={handleClicking} className="bg-amber-400 text-white p-[0.8rem] rounded-md m-[2rem] w-[80%] font-bold text-[2rem]">Submit</button>
              
          </div>
      </>
  )
}

export default Any
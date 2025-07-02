import React, { useState } from 'react'
import { useContext } from 'react'
import { todoWrapper } from '../Wrapper.jsx'
import { Bounce,toast } from 'react-toastify'
import {useNavigate,useParams} from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate();
    const [recipies, set_recipies] = useContext(todoWrapper);
    const [steps, set_steps] = useState([]);
    const params = useParams();
    const { name } = params;
    console.log("name of dish is = " + name);
    const [index, set_index] = useState('');
    const [correct_step, set_correct_step] = useState("");
    let food_item = recipies.filter((x) => x.name == name)[0];
    const handleClicking = () => {
        const temp_steps = food_item.recipies;
        console.log(steps);
        temp_steps[index - 1] = correct_step;
        set_steps(temp_steps);
        food_item.recipies = temp_steps;
        let index_2 = recipies.indexOf(food_item);
        console.log("This is index 2" + index_2)
        let food_items = recipies;
        food_items[index_2] = food_item;
        set_recipies(food_items);
        toast.success(`${index} corrected. A better dish in the house`, {
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
        set_correct_step("");
        navigate(-1);
    }
    // console.log(name);
  return (
      <>
          <h1 className="text-center p-[1rem] text-[3rem] font-bold">Correct a step</h1>
          <div className="flex flex-col items-center justify-center">
              <label className="text-[1rem] m-[1rem]" htmlFor="rate">Step number which is wrong</label><br></br>
              <input required type="number" min="1" max={(food_item.recipies.length) } value={index} onChange={(e) => set_index(e.target.value)} className="invalid:outline-red-500 valid:outline-green-500 text-[1rem] px-[1rem] w-[50vw]  border-b-2 focus:border-0" name="rate"></input><br />
              
              <label className="text-[1rem] m-[1rem]" htmlFor="name">Corrected step of the dish</label><br></br>
              <input required value={correct_step} onChange={(e) => set_correct_step(e.target.value)} type="text" className="invalid:outline-red-500 valid:outline-green-500 text-[1rem] px-[1rem] w-[50vw]  border-b-2 focus:border-0" name="name"></input><br />
              
              <button onClick={handleClicking} className="bg-amber-400 text-white p-[0.8rem] rounded-md m-[2rem] w-[80%] font-bold text-[2rem]">Submit</button>
              
          </div>
      </>
  )
}

export default Form
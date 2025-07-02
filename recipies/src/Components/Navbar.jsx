import { NavLink } from 'react-router-dom'
import { Bounce,toast } from 'react-toastify'
const Navbar = () => {
    const toastMaker = (name) => {
        toast.info(`You are at ${name} page`, {
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
    }
  return (
      <nav className="flex flex-row w-[100%] justify-center list-none">
          <NavLink onClick={() => toastMaker("Home")} to="/" className={(e) => e.isActive ? "px-[2rem] my-[1rem] text-blue-400" : "px-[2rem] my-[1rem]"}>Favourites</NavLink>
          <NavLink onClick={() => toastMaker("Recipies")} to="/about" className={(e) => e.isActive ? "px-[2rem] my-[1rem] text-blue-400" : "px-[2rem] my-[1rem]"}>Recipies</NavLink>
          <NavLink onClick={() => toastMaker("Add new recepies")} to="/any" className={(e) => e.isActive ? "px-[2rem] my-[1rem] text-blue-400" : "px-[2rem] my-[1rem]"}>Anything else</NavLink>
    </nav>
  )
}

export default Navbar
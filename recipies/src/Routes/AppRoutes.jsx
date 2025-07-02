import { Routes, Route } from 'react-router-dom'
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
import Any from "../Components/Any.jsx";
import Recipies from "../Components/Recipies.jsx";
import Form from "../Components/Form.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<About />} />
          <Route path="/" element = {<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:name" element={<Recipies />}>
            <Route path="/about/:name/form" element={<Form />} />
          </Route>
          <Route path="/any" element = {<Any />} />
    </Routes>
  )
}

export default AppRoutes
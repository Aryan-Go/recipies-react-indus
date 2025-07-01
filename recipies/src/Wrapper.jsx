import { createContext } from 'react';
import { useState } from 'react';
export const todoWrapper = createContext(null);

const Wrapper = (props) => {
    const [recipies, set_recipies] = useState([
        { name: "Paneer Tikka", description: "Paneer Tikka is a popular Indian appetizer made with marinated paneer (Indian cottage cheese) cubes, skewered and grilled or baked until charred and flavorful.", rating: "9", url: "https://imgs.search.brave.com/nfYMsb4bC4yNt-GeSf_iqRwXyH6VjodRPbBowMq9_Z4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjEv/MDYwLzU1Ni9zbWFs/bC9wYW5lZXItdGlr/a2EtcGVyZmVjdGlv/bi1zbW9reS1ncmls/bC1tYXJrcy1hbmQt/c3BpY2VzLWluZGlh/bi1hcHBldGl6ZXIt/aW4tYXJ0aXN0aWMt/aGlnaC1yZXNvbHV0/aW9uLXBob3RvLmpw/Zw" },
        { name: "7 layer Burrito", description: "A flavorful, fully loaded burrito packed with seven delicious layers: refried beans, seasoned rice, shredded cheese, crisp lettuce, fresh tomatoes, creamy guacamole, and smooth sour cream — all wrapped in a warm tortilla for the perfect bite every time.", rating: "8", url: "https://imgs.search.brave.com/iSOMo7rQt1J-yPiD__qE2SUMYmGVkojSxpmAfj1Wpw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vq/elFjOUhOcUppVVVp/VVM5aEx0Y0N1NGNN/MFlIMXNsTTZoS3Fq/bHBGdTc1ZDdnY0Qx/Y2d0UW9ScWJJTDZs/MEcwcVBicnFlOHBS/bDdzN2xyTkZOQVY5/LVI1a0pVU3pzTXVk/UFBrQnhCZHJUWms4/TEdTSlRHTXhqbzVh/LUh2djdiQzJIN2Nq/RWkwbHhseEFTR0Ut/ZFZmREdVaTNHcVE5/elc4ZnJWRTZxa3FS/V2trUkpKanJuLXo2/UlI1V0I3dzgvdzY0/MC1oNTI4LzQ2MjUz/NjIzNF8xMDYzNzUy/ODI1MjM5ODYxXzcw/NjgwNjkyNTQ2Njg3/OTg1NDFfbi5qcGc" },
        { name: "Gulab Jamun", description: "Gulab Jamun is a classic Indian dessert made of soft, melt-in-your-mouth milk solids fried to golden perfection and soaked in fragrant rose-cardamom sugar syrup. Warm, rich, and irresistibly sweet.", rating: "9", url: "https://imgs.search.brave.com/xRaSxJUiLU1DZFgG9brySkmAd6lPVE6pJDWP2iuM3Cs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9ndWxhYi1q/YW11bi1zZXJ2ZWQt/c3F1YXJlLWJyYXNz/LTI2MG53LTMyNzYw/ODI0MC5qcGc" }
        
    ]);
  return (
        <todoWrapper.Provider value={[recipies,set_recipies]}>
            {props.children}
        </todoWrapper.Provider>
  )
}

export default Wrapper
import { createContext } from 'react';
import { useState } from 'react';
export const todoWrapper = createContext(null);

const Wrapper = (props) => {
    const [recipies, set_recipies] = useState([
        { name: "Paneer Tikka", description: "Paneer Tikka is a popular Indian appetizer made with marinated paneer (Indian cottage cheese) cubes, skewered and grilled or baked until charred and flavorful.", rating: "9", url: "https://imgs.search.brave.com/nfYMsb4bC4yNt-GeSf_iqRwXyH6VjodRPbBowMq9_Z4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjEv/MDYwLzU1Ni9zbWFs/bC9wYW5lZXItdGlr/a2EtcGVyZmVjdGlv/bi1zbW9reS1ncmls/bC1tYXJrcy1hbmQt/c3BpY2VzLWluZGlh/bi1hcHBldGl6ZXIt/aW4tYXJ0aXN0aWMt/aGlnaC1yZXNvbHV0/aW9uLXBob3RvLmpw/Zw" , recipies:["Slice the block of paneer into 1-inch cubes. Then, slice each cube into 2 or 3 slices. Transfer the paneer to a mixing bowl." , "In a small bowl, stir the yogurt, ginger, garlic, cumin, paprika, and salt. Pour this yogurt marinade over the paneer and mix together. Refrigerate the paneer for at least 30 minutes" , "Once the paneer has been marinated, pan fry the paneer. Heat a nonstick frying pan (or well-seasoned cast-iron skillet) with 1 1/2 tablespoons of oil over medium heat. Arrange the pieces of paneer over the pan in a single layer. You probably need to fry the paneer in batches. Cook for 2 to 3 minutes until golden brown. Flip over all the pieces, and pan fry for another 2 minutes" , "Transfer the fried paneer to a plate and turn off the heat. Quickly wipe down the pan with a paper towel and return the heat to medium." , "Drizzle the remaining 1 1/2 tablespoons of oil to the pan and cook the remaining paneer. Because the pan is very hot already, be careful as you add the paneer to the pan, as it will splatter. Save any leftover yogurt marinade. You will add it to the sauce later. Transfer the cooked paneer to a pan." , "In a separate large sauté pan, add another 2 tablespoons of safflower oil over medium heat. Add the onions and 1/2 teaspoon salt and cook for 5 minutes. Stir frequently to prevent the onions from burning. If the onions brown very quickly, reduce the heat slightly." , "Add the ginger, garlic, coriander, paprika, garam masala, turmeric, black pepper, and remaining teaspoon of salt to the skillet. Cook for 30 seconds and coat the onions with the spices." , "Add the tomatoes, sugar, and water, and reduce the heat to medium-low (see note 5). Cover the pan, and let everything simmer for 10 minutes. Remove the lid and add the heavy cream, leftover yogurt marinade, and cayenne pepper. Stir to combine." , "If you are blending the sauce, turn off the heat now and let the sauce cool for 5 minutes before transferring to a blender to blend. Pour the sauce back into the pan and turn the heat to medium." , "Finally, add the cooked paneer to the sauce and let it heat up for about 1 minute. Turn off the heat. Garnish the paneer tikka masala with cilantro and pepper flakes, if you like. Serve with cooked basmati rice or jasmine rice."]},
        {
            name: "7 layer Burrito", description: "A flavorful, fully loaded burrito packed with seven delicious layers: refried beans, seasoned rice, shredded cheese, crisp lettuce, fresh tomatoes, creamy guacamole, and smooth sour cream — all wrapped in a warm tortilla for the perfect bite every time.", rating: "8", url: "https://imgs.search.brave.com/iSOMo7rQt1J-yPiD__qE2SUMYmGVkojSxpmAfj1Wpw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vq/elFjOUhOcUppVVVp/VVM5aEx0Y0N1NGNN/MFlIMXNsTTZoS3Fq/bHBGdTc1ZDdnY0Qx/Y2d0UW9ScWJJTDZs/MEcwcVBicnFlOHBS/bDdzN2xyTkZOQVY5/LVI1a0pVU3pzTXVk/UFBrQnhCZHJUWms4/TEdTSlRHTXhqbzVh/LUh2djdiQzJIN2Nq/RWkwbHhseEFTR0Ut/ZFZmREdVaTNHcVE5/elc4ZnJWRTZxa3FS/V2trUkpKanJuLXo2/UlI1V0I3dzgvdzY0/MC1oNTI4LzQ2MjUz/NjIzNF8xMDYzNzUy/ODI1MjM5ODYxXzcw/NjgwNjkyNTQ2Njg3/OTg1NDFfbi5qcGc",
            recipies : [
                "Warm a large tortilla on a pan or skillet for 10–15 seconds on each side until soft and pliable.",
                "Spread a layer of refried beans evenly in the center of the tortilla. This forms the hearty base.",
                "Add a scoop of seasoned rice (like Mexican or cilantro-lime rice) over the beans for flavor and texture.",
                "Sprinkle shredded cheese (cheddar or Mexican blend) over the warm rice so it begins to melt.",
                "Top with fresh shredded lettuce and diced tomatoes to add freshness and crunch.",
                "Add a generous spoonful of guacamole for creaminess and rich flavor.",
                "Finish with a drizzle of sour cream or a dollop in the center. Optional: add a dash of hot sauce.",
                "Fold the sides of the tortilla in, then roll it tightly from bottom to top to form the burrito.",
                "Toast the burrito seam-side down in a pan for 1–2 minutes to seal and lightly crisp the exterior (optional).",
                "Serve warm with extra guac, salsa, or chips on the side. Enjoy your 7-layer burrito!"
              ]
        },
        {
            name: "Gulab Jamun", description: "Gulab Jamun is a classic Indian dessert made of soft, melt-in-your-mouth milk solids fried to golden perfection and soaked in fragrant rose-cardamom sugar syrup. Warm, rich, and irresistibly sweet.", rating: "9", url: "https://imgs.search.brave.com/xRaSxJUiLU1DZFgG9brySkmAd6lPVE6pJDWP2iuM3Cs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9ndWxhYi1q/YW11bi1zZXJ2ZWQt/c3F1YXJlLWJyYXNz/LTI2MG53LTMyNzYw/ODI0MC5qcGc",
            recipies : [
                "In a mixing bowl, combine 1 cup of milk powder, 1/4 cup of all-purpose flour (maida), and 1/4 teaspoon of baking soda.",
                "Add 2 tablespoons of ghee and mix until the texture is crumbly. Gradually add milk (around 2–3 tablespoons) and gently knead into a soft, smooth dough. Do not over-knead.",
                "Cover the dough with a damp cloth and let it rest for 10–15 minutes.",
                "While the dough rests, make the sugar syrup by boiling 1.5 cups of sugar with 1.5 cups of water. Add a few crushed cardamom pods and a splash of rose water or saffron strands for fragrance. Simmer for 8–10 minutes, then turn off the heat.",
                "Divide the dough into small equal portions and roll them into smooth, crack-free balls. Avoid pressing too hard while rolling.",
                "Heat oil or ghee on low to medium heat in a deep pan. Gently drop the balls into the oil and fry them evenly until golden brown, turning occasionally. This may take 5–7 minutes per batch.",
                "Once fried, immediately transfer the hot gulab jamuns into the warm sugar syrup. Let them soak for at least 1 hour so they become soft and absorb the syrup.",
                "Serve warm or at room temperature, garnished with slivered almonds or pistachios if desired. Enjoy your rich and juicy gulab jamuns!"
              ]
         }
        
    ]);
  return (
        <todoWrapper.Provider value={[recipies,set_recipies]}>
            {props.children}
        </todoWrapper.Provider>
  )
}

export default Wrapper
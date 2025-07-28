import express from "express"
const app = express();

import { main,add_fav,get_fav,add_rec,get_rec } from "./config/database.js"
main()

import cors from "cors"
var whitelist = ["http://localhost:5173"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
        console.log(origin)
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.json());


import dotenv from "dotenv"
dotenv.config();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("This is the backend home page");
});

app.post("/gf", async(req, res) => {
    const response = req.body;
  console.log("This is the response from backend");
  console.log(response)
    console.log(response.fav);
    const data = response.fav;
  console.log(data)
  await add_fav(
    data.name,
    data.description,
    data.rating,
    data.url,
    data.recipes_array
  );
  res.send("Data has been added successfully")
})

app.get("/bf" , async(req,res) => {
  const recipies = await get_fav()
  console.log("This is the recipies variable which contains all the favourites")
  console.log(recipies.rows)
  res.json({
    message : recipies.rows
  })
})

app.post("/add_rec", async (req, res) => {
  console.log(req.body.recipie)
  const { name, description, rating, url, recipies } = req.body.recipie
  await add_rec(name, description, rating, url, recipies);
  res.send("Data has been added")
})

app.get("/get_reci", async (req, res) => {
  console.log("I am in")
  const recipies = await get_rec()
  console.log("This is the recipies variable which contains all the recipies")
  console.log(recipies.rows)
  res.json({
    message : recipies.rows
  })
})



app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("The localhost is running on the port " + port)
    }
})
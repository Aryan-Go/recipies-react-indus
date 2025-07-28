import { Client } from "pg"
import dotenv from "dotenv"
dotenv.config()
const link = process.env.db_link
const pgClient = new Client(
 link
);

//! This is an asynchronous function that I am writing below thus await is important
export const main = async () => {
  await pgClient.connect();
}

export const add_fav = async(name,description,rating,url,recipies) => {
  const type = "fav";
  await pgClient.query(
    `INSERT INTO recipes (name,description,rating,url,recipes_array,rec_type) VALUES ($1,$2,$3,$4,$5,$6)`,
    [name, description, rating, url, recipies, type]
  );
  console.log("The data has been added")
}

export const get_fav = async () => {
  const type = "fav"
  const data = await pgClient.query(`SELECT * FROM recipes WHERE rec_type=($1)`, [type])
  console.log(data.rows);
  return data;
}

export const add_rec =  async(name,description,rating,url,recipies) => {
  const type = "rec";
  await pgClient.query(
    `INSERT INTO recipes (name,description,rating,url,recipes_array,rec_type) VALUES ($1,$2,$3,$4,$5,$6)`,
    [name, description, rating, url, recipies, type]
  );
  console.log("The data has been added")
}

export const get_rec = async () => {
  const type = "rec";
  const data = await pgClient.query(
    `SELECT * FROM recipes WHERE rec_type=($1)`,
    [type]
  );
  console.log(data.rows);
  return data;
};

export const upd_Rec = async (id , recipies) => {
  await pgClient.query(`UPDATE recipes SET recipes_array = ($1) WHERE food_id = ($2) `, [recipies, id])
  console.log("Data has been updated successfully")
};
import { Client } from "pg"
const pgClient = new Client(
  "postgresql://neondb_owner:npg_rcRZ1hCXMEs7@ep-plain-boat-a1dei6dt-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
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
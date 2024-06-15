//importing all the important packages for a server

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//initialise express server and allow .env to work with the dotenv package. Also
const app = express();
dotenv.config();
//now telling the server that we are speaking JSON but tbh I don't really understand the syntax. I guess It's specific to express.
app.use(express.json());
//Telling the server to use the CORS package which allows us to communicate with the client
app.use(cors());

//"importing" the supabase URL + password included from the .env file
const dbConnectionString = process.env.DATABASE_URL;

//making a variable for the database pool, which is apparently the best way to interact with an SQL database. This uses the pg package.
export const db = new pg.Pool({
  connectionString: dbConnectionString, //I have no idea why this is a set statement here, I assume it's just part of the pg package.
});

const PORT = 6969; //setting a variable for the port that the server will use and using .listen from express to make the server listen on it. Cally B inside will log the port using template literals
app.listen(PORT, function () {
  console.log(`The server is up and listening on: ${PORT}`);
});

//this is the basic server setup. I will add one get endpoint to test the deployment. The POST functionality will be added later.

app.get("/testing", function (req, res) {
  res.json({
    message:
      "The server is accepting GET requests at the /testing endpoint on Render.com!",
  }); //this still confuses me a little but I'm assuming the get function's second argument within the cally B can be addressed using dot notation fot the json method. Not totally logical to me yet. This will pass a json message when a GET request is made to this endpoint. We've used the .listen method work on the app variable we set up so that's how it works... I guess.
});

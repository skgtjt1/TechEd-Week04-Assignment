//seed is used to start up the table in our database

import { db } from "./server.js"; //need to import the db variable from server.js that basically points to our database

//make an SQL query to create a table called "Reviews"

db.query(`CREATE TABLE IF NOT EXISTS Reviews(
    id SERIAL PRIMARY KEY,
    Username VARCHAR(255),
    Comment TEXT,
    Score INT
    )`);

//I'll seed one initial comment to see if the table gets updated
db.query(`INSERT INTO Reviews (Username, Comment, Score)
        VALUES
        ('Anonymouse', 'I had a lovely trip to the lodge, the beds were comfy and the cabin was very warm', 0)
        
        `);

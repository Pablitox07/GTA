const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', async (req, res) => 
{
  try {
    const jsonData = await fs.readFile('data.json', 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } 
  catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

app.get('/updateJson', (req, res) => {
  console.log(`cheatName=${req.query.cheatName} AND CheatCode=${req.query.CheatCode}`);
  //read json data from data.json
  //convert the json data to js object
  // add the cheatname and the cheatcode to the js object
  // write the data from the js object to data.json

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/str', (req, res) => {
  res.send("HELLO");
});

app.get('/practice', (req, res) => {
  let pp = {
    "name": "John",
    "lastName": "fusciante",
  };
  res.send(pp);
});

app.get('/test', (req, res) => {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  res.send(`${param1} ${param2}`);
});
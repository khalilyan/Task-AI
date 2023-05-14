const express = require('express');
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const path = require('path')


const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;


const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(express.static('src'))

app.get('/', async (req, res) => {
  res.sendFile(path.resolve("./src/index.html"))
  res.end(path.resolve("./src/index.js"))
});


app.get('/ask', async (req, res) => {
  const message =  req.query.message;
  
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 2048, 
    temperature: 0.7,
  });
  
 res.send(completion.data.choices[0].text)
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

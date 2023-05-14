const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
require('dotenv').config();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const runPrompt = async (prompt) => {
     const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
      });
      console.log(completion.data.choices[0].text);
}


fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
      }
        runPrompt(data)
  }); 

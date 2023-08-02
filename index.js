import express from 'express';
import {addGreeting, getGreetings} from './db.js';


const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3008

//https://localhost:3008/api/greetings

// GET ALL THE GREETINGS

app.get('/api/greetings', async function(req, res) {
    const greetings = await getGreetings();
    res.json({
        greetings
    })
})

//Create a route to add a greeting

app.post('/api/greetings', async function(req, res) {
    const greeting = req.body.greeting;
    const language = req.body.language;

    await addGreeting(language, greeting)


    res.json({
        status : "success",
        message: `Added a greeting for ${language}`
    });
})

app.listen(PORT, () => console.log(`started on port: ${PORT}`));

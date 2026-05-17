
const express = require('express');
const chatrouter = express.Router();
const axios = require('axios')



chatrouter.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
            {
                contents: [{
                    parts: [{
                        text: `

You are a helpful AI assistant for a travel app like Airbnb.
You are a helpful travel assistant AI. 
  You have to answer this types of questions about:
  - Tourist places and attractions
  -If any one put just location then you have to tell allabout transportation system,best places and their nearby hotel names recommendation where people can stay.
  - Transportation options (bus, train, taxi, local commute)
  - Nearby hotels and budget-friendly stay options
  - and give only in 100 words with key points

  Do NOT answer unrelated or general questions.
  
  User: ${message}
  `
                    }]
                }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': process.env.GEMINI_API,
                }
            }
        );

        const reply = response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't find any travel info for that.";
        res.json({ reply });

    } catch (error) {
        console.error('Gemini API Error:', error.message);
        res.status(500).json({ error: 'Something went wrong with Gemini API.' });
    }
});



module.exports = chatrouter;
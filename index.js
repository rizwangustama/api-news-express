const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const cors = require('cors');

app.use(cors());

const API_KEY = '03b7655a4ea2402fbf44302b96651440';


app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`);
        const articles = response.data.articles;

        const user = [
            {
                id: 1,
                name: "rizwan gustama"
            }
        ];

        res.json(articles);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving news from API');
    }
})

app.listen(port, () => {
    console.log(`Server Succes ${port}`);
})
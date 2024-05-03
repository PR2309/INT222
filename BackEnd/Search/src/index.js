const express = require("express");
const path = require("path");
const app = express();
const books = require("./mongo");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const templatesPath = path.join(__dirname, '../templates');
console.log(templatesPath);

app.use(express.static(templatesPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(templatesPath, 'search.html'));
});

app.post('/search', async (req, res) => {
    try {
        const user = await books.findOne({ title: req.body.name });

        if (!user) {
            return res.send("BOOK NOT FOUND");
        }else{
            return res.send("BOOK FOUND");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log('port connected');
});

import express from 'express';
import bodyParser from 'body-parser';
import cors  from 'cors';
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.post('/signin', (req, res) => {
    console.log(req.body);
    // You can send a response back to the client if needed
    res.send('Received your data!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

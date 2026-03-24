import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('This is the Home Page');
});

app.get('/problems/:id', (req, res) => {
    res.send(`This is my id: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.send(`My name is ${req.query.name}`)
})

app.listen(3000, () => {
  console.log("Listening on port:3000");
});

export default app;
import app from "./src/app.js";

const myDetails = {
  name: "Shubham Kumar",
  age: 24,
  height: 175,
  college: "GLA University",
  address: "Katihar, Bihar",
};

app.get("/", (req, res) => {
  res.json(`My name is ${myDetails.name}`);
});

app.get("/about", (req, res) => {
  res.json(myDetails);
});

app.get("/contact", (req, res) => {
  res.send("Email: connectme.shubham@gmail.com");
});
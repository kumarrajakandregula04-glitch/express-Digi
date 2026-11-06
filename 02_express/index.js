import express from "express";
const app = express();

const PORT = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

//add a new tea

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).json(newTea);
});

//get all teas

app.get("/teas", (req, res) => {
  res.status(200).json(teaData);
});

//get a tea by id

app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

//update a tea by id

app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

//delete a tea by id

app.delete("/teas/:id", (req, res) => {
  const teaIndex = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (teaIndex === -1) {
    return res.status(404).send("Tea not found");
  }
  teaData.splice(teaIndex, 1);
  res.status(200).send("Tea is deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}....`);
});

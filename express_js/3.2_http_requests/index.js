import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
// in methods below you have to treat them as address in browser of localhost local.
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Menoko OG</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

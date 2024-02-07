const express = require("express");
const ViteExpress = require("vite-express");
const { createToken, validateToken } = require("./controllers/auth");

const app = express();
app.use(express.json())

app.post('/api/createToken', createToken)

app.post('/api/validateToken', validateToken)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js WebApp!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app; // for testing

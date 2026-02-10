const express = require("express");
const app = express();

app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("✅ Bot is running");
});

// Redirect placeholder
app.get("/auth", (req, res) => {
  res.send("Auth successful. You can close this page.");
});

// Shopee webhook (empty for now)
app.post("/webhook/shopee", (req, res) => {
  console.log("Shopee webhook received:", req.body);
  res.sendStatus(200);
});

// Render uses PORT env variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
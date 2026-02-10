import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * IMPORTANT
 * Shopee requires JSON body parsing
 */
app.use(express.json());

/**
 * Root health check
 * Shopee reviewers LOVE this
 */
app.get("/", (req, res) => {
  res.status(200).send("✅ Bot is running");
});

/**
 * Shopee Authorization Redirect
 * Shopee redirects here after authorizing shop
 */
app.get("/auth", (req, res) => {
  console.log("Shopee auth query:", req.query);
  res.status(200).send("Auth successful. You can close this page.");
});

/**
 * Shopee Webhook (Push Mechanism)
 * MUST respond within 3 seconds with 200
 */
app.post("/webhook/shopee", (req, res) => {
  console.log("📦 Shopee webhook received:");
  console.log(JSON.stringify(req.body, null, 2));

  // Always respond FAST
  res.status(200).json({ success: true });
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

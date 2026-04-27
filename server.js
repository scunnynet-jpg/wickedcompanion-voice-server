import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Voice server running");
});

app.post("/voice", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

  if (text.includes("selfie") || text.includes("picture") || text.includes("photo")) {
    return res.json({
      reply: "Give me a moment, I’m sending you a picture...",
      image: "https://picsum.photos/500"
    });
  }

  res.json({
    reply: "Hey… it’s Sophie. I was hoping you’d call."
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Voice server running on " + port));

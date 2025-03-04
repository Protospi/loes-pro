const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/app", (req, res) => {
    res.json({ message: "Hello world from loes.pro!" });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

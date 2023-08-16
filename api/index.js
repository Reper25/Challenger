const express = require('express')
const app = express();
const port = process.env.PORT || 8000 ;

const router = require("./routes/routes")

require('dotenv').config();


//middleware
app.use(express.json()) ;
// app.use(cors());


//route
app.use("/", () => router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
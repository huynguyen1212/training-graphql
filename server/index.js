const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const app = express();
mongoose.connect("mongodb+srv://huynq:huynq1212@cluster0.gckii.mongodb.net/graphql-demo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.error(err));
dbConnection.once("open", () => console.log("DB connected"));

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3001, () => {
  console.log("Server is running on port 3001 !");
});

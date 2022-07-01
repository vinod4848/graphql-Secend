
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema");

const URL = "mongodb://localhost:27017/moviesdb";

const connect = mongoose.connect(URL, { useNewUrlParser: true });

dbo.collection()

connect.then(
	db => {
		console.log("Connected correctly to server!");
	},
	err => {
		console.log(err);
	},
);

const server = new ApolloServer({
	schema: schema,
});

const app = express();

app.use(bodyParser.json());
app.use("*", cors());

server.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
	console.log(` Server ready at http://localhost:5000${server.graphqlPath}`),
);

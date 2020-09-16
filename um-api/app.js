import express from "express"
import cors from "cors"
import { graphqlHTTP } from 'express-graphql'
import mongoose from "mongoose"
import graphqlSchema from "./graphql/schema"
import graphqlResolvers from "./graphql/resolvers"

const app = express()

app.use(cors())

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)

const options = { useNewUrlParser: true, useUnifiedTopology: true }

const uri = 'mongodb://localhost:27017/user-managerdb'
mongoose.connect(uri, options)
    .then(() => app.listen(3000, console.log("Server is running")))
    .catch(error => {
        throw error
    })
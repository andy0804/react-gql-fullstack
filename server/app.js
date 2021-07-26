const  express = require('express');
// allows express to understand grqphql
const {graphqlHTTP} = require('express-graphql')
const app = express();
const cors = require('cors')
app.use(cors()) // not having cors enabled will cause an access control error

const schema = require('./schema/schema')
const dbUrl = ``
const mongoose = require('mongoose');   
mongoose.connect(dbUrl)
mongoose.connection.once('open',()=>{
    console.log('Connected to the Database')
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(4000,()=>{
    console.log(`Listening at 4000`)
})
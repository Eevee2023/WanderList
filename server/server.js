// const express = require('express');
// const expressGraphQL = require('express-graphql');
// const {  buildSchema  } = require('graphql');
// const app = express();
// //graphql schema
// //include trips info and types here
// const schema = buildSchema(`
//   type Query {
//     location: String,
    
//   }
// `)

// //root resolver
// //does stuff with data returned (?)
// const root = {
//   message: () => 'Hello World!'
// }

// // Create an express server and a GraphQL endpoint

// app.use('/graphql', expressGraphQL({
//     graphiql: true
// }));
// app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));

//require the npm dependencies
const express = require('express');
//graphqlHTTP is the function that allows the app to use graphql with express
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

//create an app with express
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      greeting: {
        type: GraphQLString,
        resolve: () => 'Hello World!',
      },
    },
  }),
});

//use the /graphql endpoint to handle requests 
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true, //playground at localhost/graphql
  }));  

app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));

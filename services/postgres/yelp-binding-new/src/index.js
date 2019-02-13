const { Yelp } = require('graphql-binding');
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { importIntoDatabase } = require('./accounts');
const faker = require('faker');

console.log(Yelp);
// const favoriteBusinesses = [
//   { "term": "restaurants", "location": "10004", "limit": 50 }
// ];

const zipcodes = [
  //{ "term": "restaurants", "location": "10004", "offset": 1, "limit": 50 },
  //{ "term": "restaurants", "location": "10004", "offset": 2, "limit": 50 },
  // { "term": "restaurants", "location": "10004", "offset": 3, "limit": 50 },
  // { "term": "restaurants", "location": "10004", "offset": 4, "limit": 50 },
  // { "term": "restaurants", "location": "10004", "offset": 5, "limit": 50 },
  // { "term": "restaurants", "location": "10005", "offset": 1, "limit": 50 },
  // { "term": "restaurants", "location": "10005", "offset": 2, "limit": 50 },
  // { "term": "restaurants", "location": "10005", "offset": 3, "limit": 50 },
  // { "term": "restaurants", "location": "10007", "offset": 1, "limit": 50 },
  // { "term": "restaurants", "location": "10007", "offset": 2, "limit": 50 },
  // { "term": "restaurants", "location": "10007", "offset": 3, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 1, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 2, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 3, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 4, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 5, "limit": 50 },
  // { "term": "restaurants", "location": "10038", "offset": 6, "limit": 50 },
  // { "term": "restaurants", "location": "10280", "offset": 1, "limit": 20 }
  // { "term": "restaurants", "location": "10002", "offset": 1, "limit": 50 },
  //  { "term": "restaurants", "location": "10003", "offset": 1, "limit": 50 },
  //  { "term": "restaurants", "location": "10009", "offset": 1, "limit": 20 },
  //  { "term": "restaurants", "location": "10021", "offset": 1, "limit": 20 },
  //  { "term": "restaurants", "location": "10044", "offset": 1, "limit": 20 },
  //  { "term": "restaurants", "location": "10028", "offset": 1, "limit": 20 },
  //  { "term": "restaurants", "location": "10065", "offset": 1, "limit": 20 }
    { "term": "restaurants", "location": "10075", "offset": 1, "limit": 20 }
];


const apiKey = process.env.YELP_API_KEY || 'PfsnzwxVpNLNj9T1YR6wsaO9BEqFUZts8NUW0DsDr1f_qjnCvi09qm6tJGf-8_pv9IqfGLp-SPX7wo4D0seAWmLzmHmte9enzEjxPTrcVu2f14v9ZRuYm3bf4x6wgAoM0QRutiUmyBwjHhVaQYeZlJH05sPQLhdLJoJvyk4OYg_gfTGrt7L6vamyRXFou3UvcDxiXHYx';
const yelp = new Yelp(apiKey);

const typeDefs = importSchema('schemas/app.graphql');

const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name || 'World!'}`,
    favoriteBusinesses: (parent, args, context, info) => {
      console.log(context)
      console.log(info)
      return new Promise((resolve, reject) => {
        Promise.all(zipcodes.map(args => {
          return yelp.delegate('query', 'search', args, context, info)
        })).then((val) => {
          for (var i = 0; i < val.length; i++) {
            importIntoDatabase(val[i].business);
          }
          resolve(val);
        }).catch((ex) => {
          reject(ex);
        });

      });
      console.log(data);
    }
  },
  ...yelp.remoteResolvers(typeDefs),
  Mutation: {
    populateRestaurants: (parent, args, context, info) => {
      return new Promise((resolve, reject) => {
        Promise.all(zipcodes.map(args => yelp.delegate('query', 'search', args, context, info))).then((val) => {
          resolve(true);
        }).catch((ex) => reject(ex));
      });
    }
  }
};

const server = new GraphQLServer({ resolvers, typeDefs });
server.start(() => console.log('Server running on http://localhost:4000'));

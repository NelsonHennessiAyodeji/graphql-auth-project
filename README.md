# graphql-auth-project

GraphQL, Mongoose and MondoDB, NodeJS basic skill preview

Here are the steps involved in creating two services with the following requirements:

1. One service is set up for a basic GraphQL backend service.
2. The other service is used for MongoDB schema models and GraphQL type definitions updates.
3. The GraphQL service should have basic auth endpoints (e.g., Signup & Login).
4. The schema and types definitions are updated in the other service, and at all times the current file versions in the second service are automatically added to the GraphQL service on deployment trigger (should be able to test locally as well).........(MIGHT OMIT THIS ONE, THER'S NO TIME TO FINSH IT);

**Service 1: GraphQL Backend Service**

The GraphQL backend service will be responsible for handling all GraphQL requests. It will need to connect to a MongoDB database to store data, and it will need to have the following endpoints:

- `/signup`: This endpoint will be used to create a new user account.
- `/login`: This endpoint will be used to login to an existing user account.
- `/graphql`: This endpoint will be used to execute GraphQL queries.
- (not how the exact endpoints will look like though).

The GraphQL backend service can be implemented using any framework that supports GraphQL, such as Apollo Server or GraphQL Yoga. I'll be using Apollo Server, Mongoose, GraphQL and JavaScript for this.

**Service 2: MongoDB Schema Models and GraphQL Type Definitions**

The second service will be responsible for managing the MongoDB schema models and GraphQL type definitions. It will need to have the following features:

- The ability to create, update, and delete MongoDB schema models.
- The ability to generate GraphQL type definitions from MongoDB schema models.
- The ability to deploy the generated GraphQL type definitions to the GraphQL backend service.

The second service can be implemented using any framework that supports MongoDB and GraphQL, such as mongoose and graphql-codegen. Like I mentioned above, I'll be using Mongoose.

**Deployment**

The two services can be deployed together or separately. If they are deployed together, the deployment process should ensure that the current file versions of the schema and types definitions in the second service are automatically added to the GraphQL service. 

# Please do note that I use render for my deployments, and as it is rigth now, render might appear to not want to run nor connect when you try it, not to worry, that's how the free tier is, i think it takes 30 seconds or so to spin up

## I hope you find this project satisfactory by browsing through...

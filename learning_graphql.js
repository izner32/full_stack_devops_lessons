// LESSON 1.1 - GRAPHQL - declarative data fetching specification, get data from server to client 

// LESSON 1.2 - WHY USE GRAPHQL
// query - looks like a json object | we specify the data that we need and we get nothing more than that
{ 
    state {
        name 
        population
    }
}

// response 
{
    "data": {
        "state": {
            "name": "Ohio",
            "population": 11,590,000
        }
    }
}

// LESSON 2.1 - CREATE BASIC QUERIES
// creating query inside graphiql 

{
    //# this is how you add a comment , remove the //
    viewer{
        name
    }
}

// LESSON 2.2 - MULTIPLE FIELDS
{
    viewer{ // viewer is a field or schema, think of this as a collection in mongodb, you could specify argumetns here 
        name
        bio 
        id 
        company 
    }
}

// LESSON 2.3 - PASSING ARGUMENTS
{
    repositoryOwner(login: "renz"){ // this would return anyone who is currently a repository owner with the value of renz | this is a field or schema, you could specify arugments on fields
        id
        path 
        url
    }
}

// LESSON 3.1 - GRAPHQL SCHEMA / FIELDS (think of these as collections)

// LESSON 3.2 - QUERY THE __SCHEMA - i think schema is a database 
{
    __schema { // finding info about the schema we're using 
        queryType {
            name 
            description 
            fields {
                name 
                desc 
            }
        }
    }
}

// LESSON 4.1 - ALIASES - lets you rename the name of a field 
{
    graphqlProject: repositoryOwner(name: "graphql", owner: "facebook") { // graphqlProject is an alias 
        id 
        description 
        homepageURL 
    }
    reactProject: repositoryOwner(name: "react", owner: "facebook") { // graphqlProject is an alias 
        id 
        description 
        homepageURL 
    }
}

// LESSON 4.2 - FRAGMENTS - reusable sets of fields, when you you'll be using a speciifc format on what you want multiple times
{
    graphqlProject: repositoryOwner(name: "graphql", owner: "facebook") { // graphqlProject is an alias 
        ...repoFields 
    }
    reactProject: repositoryOwner(name: "react", owner: "facebook") { // graphqlProject is an alias 
        ...repoFields // instead of typing like the one in aliases above, we store it in a variable(fragments) repoFields
    }
}

fragment repoFields on Repository {
    id 
    description 
    homepageURL 
}

// LESSON 4.3 - NESTED FIELDS - getting a lot of data in one request 
{
    viewer {
        id 
        name 
        isEmployee 
        location 
        databaseId
        repositories(last:5) {
            edges {
                node {
                    id 
                    name 
                }
            }
        }
        pullRequests(last:4) { // last is an argument that shows the last 4 item 
            edges {
                node {
                    id
                    author 
                }
            }
        }
    }
}

// LESSON 4.6 - PAGINATION - i honest doesn't understand this
{
    repository(name: "graphql", owner: "facebook"){
        id 
        issues (last:5, states: CLOSED) { // she just added states
            edges {
                node {
                    id 
                    number 
                    title 
                }
            }
        }
    }
}

// LESSON 4.7 - OPERATION NAMES - to make the query reusable and easy to find 
{ // we did not specify query { here and that's perfectly fine, it's kind of implicit in here, you could think of this as the way you think about anonymous function in js
    organization(login: "facebook"){
        id 
        name 
        members(first:5) {
            edges { // edges automatically appeared, that's because members has array of fields
                node { 
                    id 
                    name 
                }
            }
        }
    }
}

// above we add name after the keyword query to create a variable for this query 
query thisIsQuery { // operation name or query name to distinguish query from one another and now we can reuse this query :)
    organization 
        // and so on 
}

// LESSON 4.8 - VARIABLE DEFINITIONS 
query FirstFiveOrgMembers ($login: String!) { // we declare variable with a dollar sign then we indicate their datatype, idk why you would declare varriable name first before the datatype that is very counter intuitive hayst
    organization(login: $login) {
        id 
        name 
        members(first:5) {
            edges { // in real querying we don't actually type these edges, they automatically appear
                node {
                    id 
                    name 
                }
            }
        }
    }
}

// query variables , below graphql panel
{ 
    "login": "facebook"
}

// LESSON 4.9 - MULTIPLE VARIABLE DEFINITIONS 
query FirstFiveOrgMembers ($login: String!, $n:Int!) { 
    organization(login: $login) {
        id 
        name 
        members(first:$n) {
            edges { 
                node {
                    id 
                    name 
                }
            }
        }
    }
}

// query variables
{
    "login":"airbnb",
    "n":5
}

// LESSON 5.4 - MUTATION - make changes to the data ( think of this as like put or delete in rest) | btw you could see these mutations from the graphiql docs at the right side 
mutation NewComment($input: AddCommentInput!) { // uhmm so in here we use mutation keyword instead of query and the datatype of the variable input is kinda weird
    AddCommentInput(input: $input) { // input is a payload of data idk what this means 
        clientMutationId // it seems like these are the content of an addCommentInput, you assign value into these things
        subject {
            id 
        }
    }
}

// inside query variables - assigning some data to doze varyabols
{
    "input": {
        "clientMutationId": "5125152",
        "subjectId": "MADFQ23R4ASDFASDF",
        "body": "Great idea -thank you!"
    }
}
    

// LESSON X.1 - DEFINING A GRAPHQL SCHEMA 
/*
scalar type - int, bool, string, id, etc. 
object type - like an interface in typescript
    type Book {
        title: String 
    }
query type - 
    type Query {
        getBooks: [Book] 
        getAuthors: [Author] 
    }
*/ 

// LESSON X.2 - FIELDS 
// fields can refer to object or the single property 
{
    repository(name: "graphql", owner: "facebook"){ // this is a field 
        id // this is also a field
        issues (last:5, states: CLOSED) { 
            edges {
                node {
                    id 
                    number 
                    title 
                }
            }
        }
    }
}

// LESSON X.3 - QUERYING AN ARRAY - if the edges appeared that means it's connecting you to an array of fields or objects
// nodes - each of the object

// LESSON X.4 - REQUIRED, JUST ADD (!) TO MAKE SOMETHING REQUIRED - you can add this in variable 
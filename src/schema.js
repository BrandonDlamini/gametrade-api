const schema = `

""" 
TYPE
"""

type Game {
    title: String!
    dateReleased: String
    id: String!
    publisher: Publisher
    tradeFor: String!
    phoneNumber: String!
}

type Publisher {
    name: String
    games: [Game]

}

"""
Query
"""

type Query {
    hello: String!
    viewGames: [Game]
    
}

"""
Mutation
"""

type Mutation{
    addGame( title: String!,dateReleased: String!, publisher: String!, tradeFor: String!, phoneNumber: String!): Game

}
`;

export {schema};
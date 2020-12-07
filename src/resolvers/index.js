import {hello, viewGames} from './query'
import {addGame} from './mutation'

export const resolvers ={
    Query: {
        hello: (root, args, context) => hello(args,context),
        viewGames: (root, args, context) => viewGames(args,context)
    },

    Mutation: {
        addGame:(root, args, context) => addGame(args,context)
    }
}
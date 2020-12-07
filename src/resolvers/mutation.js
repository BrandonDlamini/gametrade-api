import dynamodbLib from '../../libs/dynamodb-lib'
import * as uuid from 'uuid'

export const addGame = async(args, context) =>{
    
    const params = {
        TableName : process.env.tableName,
        Item: {
            title: args.title,
            dateReleased: args.dateReleased,
            id: uuid.v1(),
            publisher: args.publisher,
            tradeFor: args.tradeFor
        }
    }

    try {
        await dynamodbLib.call("put", params)
        return {
            title: args.title,
            dateReleased: args.dateReleased,
            id: uuid.v1(),
            publisher: args.publisher,
            tradeFor: args.tradeFor
        }
    }

    catch (e) {
        console.log(e)
    }
}
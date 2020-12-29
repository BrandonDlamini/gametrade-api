import * as dynamodbLib from '../../libs/dynamodb-lib';
import * as uuid from "uuid";

export const addGame = async(args, context) => {
    const params = {
        TableName : process.env.tableName,
        Item: {
            userId: uuid.v1(),
            gameId: uuid.v1(),
            title: args.title,
            dateReleased: args.dateReleased,
            id: uuid.v1(),
            publisher: args.publisher,
            tradeFor: args.tradeFor,
            phoneNumber: args.phoneNumber
        }
    };

    try {
        await dynamodbLib.call("put", params);
        return {
            title: args.title,
            dateReleased: args.dateReleased,
            id: uuid.v1(),
            publisher: args.publisher,
            tradeFor: args.tradeFor,
            phoneNumber: args.phoneNumber
        };
    }

    catch (e) {
        console.log(e);
    }
};
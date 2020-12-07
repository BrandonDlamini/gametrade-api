import * as uuid from 'uuid'
import dynamodbLib from '../../libs/dynamodb-lib'

export const hello = (args,context) => {
    return "Your GraphQl API is now live!!!"
}

export const viewGames = async (args,context) => {
    const params = {
        TableName: process.env.tableName
    }

    try {
        const result = await dynamodbLib.call("scan", params)
        return result.Items
    }

    catch (e){
        console.log(e)
    }
}


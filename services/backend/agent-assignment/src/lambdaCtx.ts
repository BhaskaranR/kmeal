import { Callback, Context } from 'aws-lambda';
import { assignAgent } from './';

export const handler = async (event: any, context: Context, callback: Callback) => {
    const { id, event: {op, data}, table } = JSON.parse(event.body);
    console.log(`processing event ${id}`);
    try {
        var result = await assignAgent(data.new);
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(result)
        });
    } catch(e) {
        console.log(e);
        return callback(null, {
            statusCode: 500,
            body: e.toString()
        });
    }
};

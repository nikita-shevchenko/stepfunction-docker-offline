import { Context, Callback, APIGatewayEvent } from 'aws-lambda';

module.exports.handler = (event: APIGatewayEvent, context: Context, callback: Callback): void => {
  console.log('second function called');
  const response: object = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'second function called',
      input: event
    })
  };
  callback(null, response);
};

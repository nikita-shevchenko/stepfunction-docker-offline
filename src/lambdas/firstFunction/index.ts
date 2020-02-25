import { Context, Callback, APIGatewayEvent } from 'aws-lambda';

module.exports.handler = (event: APIGatewayEvent, context: Context, callback: Callback): void => {
  console.log('first function called');
  const response: object = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'first function called',
      input: event
    })
  };
  callback(null, response);
};

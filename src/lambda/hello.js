// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export default function handler(event, context, callback) {
    console.log('queryStringParameters', event.queryStringParameters)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Hello, Alex2!' }),
    })
}

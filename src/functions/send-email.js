exports.handler = async event => {
    const AWS = require("aws-sdk")

    let requestParams = JSON.parse(event.body)
    let name = requestParams.name
    let email = requestParams.email
    let message = requestParams.message

    AWS.config.update({
        accessKeyId: 'your-aws-access-key-here',
        secretAccessKey: 'your-secret-access-key-here',
        region: 'aws-region-here'
    })

    const ses = new AWS.SES({ apiVersion: "2010-12-01" })
    const params = {
        Destination: {
            ToAddresses: [email] // Email address/addresses that you want to send your email
        },
        //   ConfigurationSetName: <<ConfigurationSetName>>,
        Message: {
            Body: {
                Html: {
                    // HTML Format of the email
                    Charset: "UTF-8",
                    Data:
                        `<html>
                  <body>
                    From: ${name}
                    <br />
                    Message: ${message}
                  </body>
              </html>`
                },
                Text: {
                    Charset: "UTF-8",
                    Data: ""
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "From Contact Form"
            }
        },
        Source: email
    }

    return ses.sendEmail(params).promise().then(data => {
        console.log("email submitted to SES", data);
        return {
            statusCode: 200,
            body: `Message sent`,
        }
    })
        .catch(error => {
            console.log(error);
            return {
                statusCode: 500,
                body: `Message unsuccesfully sent, error: ${error}`,
            }
        })
}

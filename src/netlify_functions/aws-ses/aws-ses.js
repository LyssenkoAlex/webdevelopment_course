require('dotenv').config()
const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env


const handler = async config => {
    const AWS = require("aws-sdk")

    let message = config.message;

    AWS.config.update({
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
        region: REGION
    })

    const ses = new AWS.SES({ apiVersion: "2010-12-01" })
    const params = {
        Destination: {
            ToAddresses: [CONTACT_TO_EMAIL_ADDRESS] // Email address/addresses that you want to send your email
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
                    From: ${FROM_EMAIL_ADDRESS}
                    <br />
                    Message AWS: ${message}
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
        Source: FROM_EMAIL_ADDRESS
    }

    return ses.sendEmail(params).promise().then(data => {
        console.log("email submitted to SES", data);
        return {
            statusCode: 200,
            body: `Message sent using AWS`,
        }
    })
        .catch(error => {
            console.log(error);
            return {
                statusCode: 500,
                body: `Message unsuccessfully sent, error: ${error}`,
            }
        })
}

export default handler ;

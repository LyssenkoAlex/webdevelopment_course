require('dotenv').config()
const { REACT_APP_ACCESS_KEY_ID, REACT_APP_SECRET_ACCESS_KEY, REACT_APP_REGION, REACT_APP_FROM_EMAIL_ADDRESS, REACT_APP_CONTACT_TO_EMAIL_ADDRESS } = process.env


exports.handler  = async config => {
    const AWS = require("aws-sdk")
    console.log('FROM_EMAIL_ADDRESS: ', process.env.REACT_APP_FROM_EMAIL_ADDRESS)

    let message = config.message;

    AWS.config.update({
        accessKeyId: REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
        region: REACT_APP_REGION
    })

    const ses = new AWS.SES({ apiVersion: "2010-12-01" })
    const params = {
        Destination: {
            ToAddresses: [REACT_APP_CONTACT_TO_EMAIL_ADDRESS] // Email address/addresses that you want to send your email
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
                    From: ${REACT_APP_FROM_EMAIL_ADDRESS}
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
        Source: REACT_APP_FROM_EMAIL_ADDRESS
    }

    console.log('params: ', params)

    return ses.sendEmail(params).promise().then(data => {
        console.log("email submitted to SES", data);
        return {
            statusCode: 200,
            body: `Message sent using AWS react2`,
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


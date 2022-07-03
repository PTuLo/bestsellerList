const AWS = require("aws-sdk");
const axios = require("axios");

AWS.config.apiVersions = {
  dynamodb: "2012-08-10",
};
AWS.config.update({
  region: "us-east-1",
});

/**
 * Begin execution of GetKMP Lambda Function
 */
async function start(event) {
  try {
    //get nyt bestseller books api key/secret
    //call axios
    //look through the names of the lists
  } catch (err) {
    console.info(err);
    throw err;
  }
} // start

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/
 *   developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
async function handler(event) {
  let response;
  try {
    response = await start(event);
  } catch (err) {
    console.info(err);
    return err;
  }

  return response;
}

module.exports = { handler };

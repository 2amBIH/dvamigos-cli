const rest = require('node-rest-client');

const baseUrl = "https://httpbin.org";

const client = new rest.Client();

client.registerMethod("find", `${baseUrl}/get`, "GET");

module.exports = client.methods;
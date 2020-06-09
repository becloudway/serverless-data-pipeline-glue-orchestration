'use strict';
var AWS = require('aws-sdk');

var glue = new AWS.Glue();

module.exports.hello = async event => {

  var params = {
    Name: process.env.CRAWLER_NAME /* required */
  };

  return glue.startCrawler(params).promise();

};

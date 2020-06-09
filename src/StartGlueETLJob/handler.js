'use strict';
var AWS = require('aws-sdk');

var glue = new AWS.Glue();

module.exports.handle = async event => {

  var params = {
    JobName: process.env.ETL_JOB_NAME, /* required */ // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Glue.html
    NumberOfWorkers: 1,
    WorkerType: 'Standard'
  };
  return glue.startJobRun(params).promise()

};

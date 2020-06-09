# Serverless data pipelines glue orchestration service

Orchestrating your data processing flow with Lambda.
> TL-DR; Service to trigger a Glue Crawler and run Glue ETL job on completion of the crawler.


![architecture](./img/architecture.jpg)

Suppose new data is continuously landing on `S3` via `Firehose`.
To create partitions Firehose uses an internal timestamp field called `ApproximateArrivalTimestamp`.
You might want to repartition this data based on a timestamp in the events using `AWS Glue`.

To do that you'd have to "know" your data that landed on `S3`.
Hence, you need to run a crawler.  
We'll run this crawler every X-amount of time based on a cron trigger we defined in `Cloudwatch events`.  
A `Lambda` is triggered and in turn starts the crawler.

When you're crawler is done running you want to start the ETL job to repartition the data.
Put differently, you want to trigger the ETL job when a "success" event from the crawler appears.
Hence, we'll be using `EventBridge` to listen for that event and a `Lambda` to kick of the ETL job.

## Development
* deploy: `sls deploy -v`

Note: This project is instrumented with Lumigo in order to improve observability.
If you do not need this, you can remove the Lumigo serverless plugin.
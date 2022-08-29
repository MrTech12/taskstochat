# taskstochat

## Overview
Retrieving all important tasks from Todoist, using a filter, and sending the information to as a chat message to Discord. <br><br>

## Motivation
Todoist is a service to store tasks, like a to-do list. These tasks can be assigned to different projects.
The service can display tasks based on a selected date, like `tasks for today` or `tasks that are due next wednesday`. With this, the tasks get sorted based on their priority. The highest (priority 1) is on top and tasks with priority 4 are on the bottom. <br>
There are also Filters, which can be configured to only show tasks based on a set of conditions, like `only show high priority tasks` or `show tasks that occur every month`. <br>
This project retrieves the tasks, with a priority of 1 & 2, and send them to Discord where they are displayed as a message by a bot. <br>
This makes is easier to have one place where all the important items of the day can be accessed.

## Technologies
This project makes use of Node.js with TypeScript. <br><br>

## Workflow
The application runs when a certain timeframe has been reached. <br>
Once that happens, the program retrieves all the filters of the account & find the required filter that is used in the following step. <br>
After that, all important tasks of the day are retrieved by using the filter. The task names, priorities and associated 'project ids' of the tasks are then copied. <br>
After obtaining the task information, the application retrieves the project names using the 'project_ids' and filters out the duplicates. <br>
Once that is done, a chat message is created and send to the right Discord channel.

## Setup
The `.env.example` file contains the environment variables that are needed to run the application. The keys inside this file can be put in a `.env` file and populated with the values. <br>

The following values are needed for the keys:
* PORT -- The port number for the 'express' webserver.
* TODOIST_TOKEN -- The API token to communicate with the Todoist API.
* IMPORTANT_TASK_FILTER_ID -- The ID of the filter, to retrieve all the important tasks of the day.
* DISCORD_TOKEN -- The Discord token used to communicate with a Discord Bot.
* DISCORD_CHANNEL_NAME -- The name of the Discord channel to send the message to.

The command to install all the dependencies is `npm install`.
The command to start the project is `npm run start`. This runs the TypScript compiler to produce JavaScript versions of the TypeScript files & place then in a 'dist' folder which will also be created during this process.
After the JavaScript files are generated, Node.JS will be started on the `index.js` file.

The program needs to run every morning, on 07:30 (7:30 AM). This is handled with a cron job, using [node-cron](https://www.digitalocean.com/community/tutorials/nodejs-cron-jobs-by-examples). <br><br>

The project is created with the 'wrangler' CLI tool (v 2.0.15), from Cloudflare for serverless applications (workers). <br>
To publish your Worker to the Internet, run `npm run deploy`

<!-- ## Docker
The Dockerfile can be used to create Docker images & containers. It is also available on [DockerHub](https://hub.docker.com/repository/docker/mrtech12/taskstochat). <br>
To run a container, a couple environment variables need to be supplied in order to make it communicate with external services. A port needs to be supplied as well. <br>
The environment values can be put in a file called `env.list` with the format of `key=value`. Quotes are not needed. <br> To pass the file to the container, use the `--env-file` flag. For the port, use the `-p` flag with this format: `0000:0000`.

The following variables & their values are needed:
* PORT -- The port number for the 'express' webserver.
* TODOIST_TOKEN -- The API token to communicate with the Todoist API.
* IMPORTANT_TASK_FILTER_ID -- The ID of the filter, to retrieve all the important tasks of the day.
* DISCORD_TOKEN -- The Discord token used to communicate with a Discord Bot.
* DISCORD_CHANNEL_NAME -- The name of the Discord channel to send the message to.
* TZ -- The timezone of the container to display the right time in the log messages. See this [link](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for accepted values. -->

## Deployment
* The project may be deployed onto Cloudflare Workers, which have support for Cronjob triggers.

## External sources
The project makes use of the `axios` library to communicate with Todoist. <br>
There are two API's for Todoist interactions: the REST API & the Sync API.
* The REST API is used for retrieving tasks and projects.
* The Sync API is used for retrieving filters.
The project also makes use of the `discord.js` library, to send an Embed message to a Discord channel for informing the user. <br><br>


## Disclaimer
This project is NOT created by, affiliated with, or supported by Doist.
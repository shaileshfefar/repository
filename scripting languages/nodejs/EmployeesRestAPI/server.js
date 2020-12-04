/*  
	@Program name: Employee Rest API using ExpressJs (NodeJS)
	@Date: 05/12/2020
	@Author: Shailesh Fefar
	@File name: server.js
	@Licence Type: MIT License
*/
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 8001;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {  
console.log('Server is listening on port ${port}');});
/*  
	@Program name: Employee Rest API using ExpressJs (NodeJS)
	@Date: 05/12/2020
	@Author: Shailesh Fefar
	@File name: employee.routes.js
	@Licence Type: MIT License
*/
const express = require('express')
const router = express.Router()
const employeeController =   require('../controllers/employee.controller');
// Retrieve all employees (GET)
router.get('/', employeeController.findAll);
// Create a new employee (POST)
router.post('/', employeeController.create);
// Retrieve a single employee with id (GET)
router.get('/:id', employeeController.findById);
// Update a employee with id (PUT)
router.put('/:id', employeeController.update);
// Delete a employee with id (Delete)
router.delete('/:id', employeeController.delete);
module.exports = router
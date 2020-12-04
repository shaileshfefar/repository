/*  
	@Program name: Employee Rest API using ExpressJs (NodeJS)
	@Date: 05/12/2020
	@Author: Shailesh Fefar
	@File name: employee.controller.js
	@Licence Type: MIT License
*/
'use strict';
const Employee = require('../models/employee.model');
// Find all employees (GET)
exports.findAll = function(req, res)
{
	Employee.findAll(function(err, employee) 
	{  
		console.log('Controller') 
		if(err)
			res.send(err);  
		console.log('Response:', employee);  
		res.send(employee);
	});
};
// Create a employee (POST)
exports.create = function(req, res)
{
	const new_employee = new Employee(req.body);
	// Handles null error
	if(req.body.first_name==""&&req.body.last_name=="")
	{
		res.status(400).send({ error:true, message: 'Firstname and Lastname are required field' });
	}
	else if(req.body.first_name=="")
	{
		res.status(400).send({ error:true, message: 'Firstname is required field' });
	}
	else if(req.body.last_name=="")
	{
		res.status(400).send({ error:true, message: 'Lastname is required field' });
	}
	else
	{
		Employee.create(new_employee, function(err, employee) 
		{  
			if(err)
				res.send(err);  
			//res.json({error:false,message:"Employee has been created successfully...!",data:employee});
			console.log('Response:', employee);
			res.json({error:false, message:"Employee has been created successfully...!"});
		});
	}
};
// Find a employee (GET)
exports.findById = function(req, res) 
{
	Employee.findById(req.params.id, function(err, employee)
	{ 
		if(err)  
			res.send(err);
		console.log('Response:', employee);
		res.json(employee);
	});
};
// Update a employee (PUT)
exports.update = function(req, res)
{
	const new_employee = new Employee(req.body);
	if(req.body.first_name==""&&req.body.last_name=="")
	{
		res.status(400).send({ error:true, message: 'Firstname and Lastname are required field' });
	}
	else if(req.body.first_name=="")
	{
		res.status(400).send({ error:true, message: 'Firstname is required field' });
	}
	else if(req.body.last_name=="")
	{
		res.status(400).send({ error:true, message: 'Lastname is required field' });
	}
	else
	{
		Employee.update(req.params.id, new Employee(req.body), function(err, employee) 
		{   
			if(err)   
				res.send(err);
			console.log('Response:', employee);
			res.json({ error:false, message: 'Employee has been updated successfully...!' });
		});
	}
};
// Delete a employee (DELETE)
exports.delete = function(req, res)
{
	Employee.delete( req.params.id, function(err, employee)
	{
		if(err)
			res.send(err);
		console.log('Response:', employee);
		res.json({ error:false, message: 'Employee has been deleted successfully...!' });
	});
};
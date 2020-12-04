/*  
	@Program name: Employee Rest API using ExpressJs (NodeJS)
	@Date: 05/12/2020
	@Author: Shailesh Fefar
	@File name: employee.model.js
	@Licence Type: MIT License
*/
'use strict';
var dbConn = require('./../../config/db.config');
// Create Employee object
var Employee = function(employee)
{  
	this.first_name=employee.first_name;  
	this.last_name=employee.last_name;
};
// Insert Employee using create method
Employee.create = function (newEmp, result) 
{
	dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
		if(err)
		{
			console.log("Error: ", err);
			result(err, null);
		}
		else
		{
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};
// Retrive Employee using findById method
Employee.findById = function (id, result)
{
	dbConn.query("Select * from employees where id = ? ", id, function (err, res)
	{
		if(err)
		{ 
			console.log("Error: ", err);  
			result(err, null);
		}
		else
		{
			result(null, res);
		}
	});
};
// Retrive Employee using findAll method
Employee.findAll = function (result)
{
	dbConn.query("Select * from employees", function (err, res)
	{
		if(err) 
		{  
			console.log("Error: ", err);  
			result(null, err);
		}
		else
		{  
			console.log('employees : ', res);  
			result(null, res);
		}
	});
};
// Update employee using update method
Employee.update = function(id, employee, result)
{
	dbConn.query("UPDATE employees SET first_name=?,last_name=? WHERE id = ?", [employee.first_name,employee.last_name, id], 
	function (err, res)
	{
		if(err) 
		{
			console.log("Error: ", err);  
			result(null, err);
		}
		else
		{
			result(null, res);
		}
	});
};
// Delete Employee using delete method
Employee.delete = function(id, result)
{
	dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res)
	{
		if(err) 
		{  
			console.log("Error: ", err);  
			result(null, err);
		}
		else
		{ 
			result(null, res);
		}
	});
};
// Export Employee
module.exports= Employee;
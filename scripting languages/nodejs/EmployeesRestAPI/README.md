# repository
A repository for tutorial purpose...
Tested on NodeJS V14.15.1, ExpressJS V4.17.1 and MySQL V5.7.31

This is a Employee CRUD API. CRUD means Create, Read, Update, and Delete. My API will have the following endpoints:
1. GET /api/employee will return all employees and will be accepting GET requests. (For example… https://{yourdomain}:8001/api/employees)
2. GET /api/employee/{id} will return a employee record by referencing its id and will be accepting GET requests.
3. POST /api/employee will create a new employee record and will be accepting POST requests.
4. PUT /api/employee/{id} will update an existing employee record by referencing its id and will be accepting PUT requests.
5. DELETE /api/employee/{id} will delete a employee record by referencing its id and will be accepting DELETE requests.
The Employee record will only contain first_name and last_name as details. When you are done developing these endpoints you will use the endpoints to develop an actual employee records application that will make use of the API. Validation was added in cases like create and update employee both fields like first_name and last_name are required .

For demo to get all employees record as per step 1 please [click here](https://nodejs.shaileshfefar.com/api/employees "NodeJS REST API Output"){:target="_blank"}
and so on…
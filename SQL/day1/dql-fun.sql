create database dqlfunction;
use dqlfunction; 




-- Create Employees Table
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);

-- Insert Sample Data
INSERT INTO Employees (id, name, department, salary, city) VALUES
(1, 'Arun', 'Developer', 70000, 'Chennai'),
(2, 'Bala', 'Developer', 65000, 'Chennai'),
(3, 'Charan', 'Developer', 60000, 'Madurai'),
(4, 'Divya', 'Developer', 55000, 'Salem'),
(5, 'Esha', 'Tester', 45000, 'Chennai'),
(6, 'Farhan', 'Tester', 40000, 'Madurai'),
(7, 'Gokul', 'HR', 35000, 'Salem'),
(8, 'Hari', 'HR', 30000, 'Coimbatore'),
(9, 'Ishwar', 'Manager', 90000, 'Chennai'),
(10, 'Jaya', 'Manager', 85000, 'Coimbatore');

select * from Employees;
select department,count(*) from Employees group by department;
select city,count(*) from Employees group by city;
select department,sum(salary) from Employees group by department;
select city, count(*) employcount,max(salary) higest  ,min(salary) lowest  from Employees group by city;

select department, count(*) employcount,max(salary) higest  ,min(salary) lowest,sum(salary) total,avg(salary) avg from Employees group by department;
select city, count(*) employcount,max(salary) higest  ,min(salary) lowest,sum(salary) total,avg(salary) avg from Employees group by city;





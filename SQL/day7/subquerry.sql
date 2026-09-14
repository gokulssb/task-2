CREATE database emptable;
use emptable; 





CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Salary DECIMAL(10,2),
    DepartmentID INT,
    DepartmentName VARCHAR(50)
);



-- Insert Employees
INSERT INTO Employees
(EmpID, Name, Salary, DepartmentID, DepartmentName)
VALUES
(1, 'Gokul', 35000.00, 102, 'HR'),
(2, 'Arun', 40000.00, 101, 'IT'),
(3, 'Priya', 45000.00, 103, 'FINANCE'),
(4, 'Kavin', 38000.00, 102, 'SALES'),
(5, 'Divya', 42000.00, 104, 'MANAGER');

use emptable;

select * from Employees;



select * from Employees where Salary >(select avg(Salary) from Employees);
select max(Salary) from Employees;
select * from Employees where Salary >=(select max(Salary) from Employees);
select min(Salary) from Employees;

select * from Employees where Salary =(select min(Salary) from Employees);





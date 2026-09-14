CREATE DATABASE DBofEMP;
USE DBofEMP;
CREATE TABLE EMPTABLE(
ID INT primary key auto_increment,
EMPNAME varchar(100),
DEPARTMENT VARCHAR(100),
SALERY INT,
CITY VARCHAR(101)

);

insert into EMPTABLE values 
(1,'Sudhan','Developer',65000,'Chennai'),
(2,'Rahul','Tester',40000,'Madurai'),
(3,'Karthik','Developer',55000,'Chennai'),
(4,'Ajay','HR',35000,'Salem'),
(5,'Vijay','Manager',85000,'Coimbatore'),
(6,'Arun','Developer',60000,'Bangalore'),
(7,'Priya','Tester',45000,'Chennai'),
(8,'Divya','HR',30000,'Madurai'),
(9,'Surya','Developer',70000,'Salem'),
(10,'Anitha','Manager',90000,'Chennai'),
(11,'Dharan','Developer',70000,'Chennai'),
(12,'Pradeep','Tester',80000,'Madurai'),
(13,'Harish','Developer',55000,'Chennai'),
(14,'Mohan','HR',35000,'Salem'),
(15,'Raju','Manager',85000,'Coimbatore'),
(16,'Sri','Developer',60000,'Bangalore'),
(17,'Ravi','Tester',45000,'Chennai'),
(18,'Sam','HR',30000,'Madurai'),
(19,'Santhosh','Developer',70000,'Salem'),
(20,'Vanitha','Manager',90000,'Chennai');

select * from EMPTABLE;
select city,avg(SALERY) from EMPTABLE group by  city having avg(SALERY) > 50000; 
select city,avg(SALERY) from EMPTABLE where city ="coimbatore"
select DEPARTMENT max(SALERY) from EMPTABLE group by  DEPARTMENT having max(SALERY) > 70000; 
create database teshop;
use teshop;

create table teaemp (

empid int primary key auto_increment,
empname varchar(30),
empdepart int,
empsalary int,
empcity int,

foreign key (empdepart) references teadepart(departid),

);

create table teadepart (

departid int primary key auto_increment,
depname varchar(30)


);

create table teacity (

cityid int primary key auto_increment,
cityname varchar(30)


);

create table teaproduct (

proid int primary key auto_increment,
proname varchar(30),
price int

);

create table customer (

cusid int primary key auto_increment,
cusname varchar(30),
cusmobile int

);


create  table billingpro (


billid int primary key auto_increment,
prductid int,
cusid int,
total int,
quntity int,

foreign key (prductid) references teaproduct(proid),
foreign key (cusid) references customer(cusid)

);



-- teadepart
INSERT INTO teadepart (depname) VALUES
('Sales'),
('Purchase'),
('Production'),
('Quality Control'),
('Finance'),
('Human Resources'),
('Marketing'),
('Logistics'),
('Research'),
('Administration');

-- teacity
INSERT INTO teacity (cityname) VALUES
('Chennai'),
('Coimbatore'),
('Madurai'),
('Salem'),
('Trichy'),
('Erode'),
('Tirunelveli'),
('Vellore'),
('Thanjavur'),
('Tuticorin');

-- teaproduct
INSERT INTO teaproduct (proname, price) VALUES
('Green Tea', 120),
('Black Tea', 150),
('Masala Tea', 180),
('Lemon Tea', 100),
('Ginger Tea', 130),
('Herbal Tea', 200),
('Cardamom Tea', 170),
('Jasmine Tea', 220),
('Tulsi Tea', 160),
('Mint Tea', 140);

-- customer
INSERT INTO customer (cusname, cusmobile) VALUES
('Arun Kumar', 987654321),
('Priya', 912345678),
('Vijay', 923456789),
('Karthik', 934567890),
('Divya', 945678901),
('Sneha', 956789012),
('Rahul', 967890123),
('Anitha', 978901234),
('Suresh', 989012345),
('Meena', 990123456);


INSERT INTO teaemp (empname, empdepart, empsalary, empcity) VALUES
('Arun Kumar', 1, 25000, 1),
('Priya Sharma', 2, 28000, 2),
('Vijay Kumar', 3, 32000, 3),
('Sneha Reddy', 4, 30000, 4),
('Rahul Singh', 5, 45000, 5),
('Divya Nair', 6, 35000, 6),
('Karthik Raj', 7, 38000, 7),
('Anitha Devi', 8, 27000, 8),
('Suresh Babu', 9, 50000, 9),
('Meena Lakshmi', 10, 33000, 10);


INSERT INTO billingpro (prductid, cusid, total, quntity) VALUES
(1, 1, 240, 2),
(2, 2, 450, 3),
(3, 3, 360, 2),
(4, 4, 500, 5),
(5, 5, 390, 3),
(6, 6, 400, 2),
(7, 7, 680, 4),
(8, 8, 220, 1),
(9, 9, 480, 3),
(10, 10, 700, 5);
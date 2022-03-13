select * from customers
select * from orders
select * from [Order Details]

select orders.customerid,customers.contactname from orders  join orderdetails on
 orders.orderid=orderdetails.orderid join customers on customers.customerid=orders.customerid where orderdetails.unitprice =14
---
select orders.customerid,customers.contactname from orders  join orderdetails on
--1 Find the company’s name that placed order 10290. (Tables : Customers & Orders)
select customers.companyname  from customers inner join
 orders on customers.customerid=orders.customerid where orders.orderid=10290
---subquery
select companyname from customers where customerid =(select customerid from orders where orderid=10290)

--2 Find the Companies that placed orders in 1997 (Tables : Customers & Orders)
select * from customers
select * from orders
select  distinct customers.companyname  from customers inner join
 orders on customers.customerid=orders.customerid where datepart(year,orderdate)=1997

----subquery
select companyname from customers where customerid in (select customerid from orders where datepart(year,orderdate)=1997)

---- 3 Create a report that shows the product name and supplier id for all products 
--supplied by Exotic Liquids, Grandma Kelly's Homestead, and Tokyo Traders. (Tables : Products & Suppliers)
----	HINT: You will need to escape the apostrophe in "Grandma Kelly's Homestead." 	
--To do so, place another apostrophe in front of it. For example,
----	SELECT * FROM Suppliers WHERE CompanyName='Grandma Kelly‘’s 	Homestead’;
select * from suppliers
select * from products

select products.productname,suppliers.supplierid,suppliers.companyname from 
products inner join suppliers on products.supplierid=suppliers.supplierid
where companyname in ( 'exotic liquids','grandma kelly''s homestead','tokyo traders')
--subquery
select productname,supplierid from products where supplierid in 
(select supplierid from suppliers where companyname in ( 'exotic liquids','grandma kelly''s homestead','tokyo traders') )

--4 Create a report that shows all products by name that are in the Seafood category. 	(Tables : Products & Categories)
select * from products
select * from categories

select productname from products where categoryid =(select categoryid from categories where categoryname ='seafood')

--5 Create a report that shows all companies by name that sell products 	in CategoryID 8. (Tables : Supplier & Products)
select * from products
select * from suppliers

select companyname from suppliers where supplierid in(select supplierid from products where categoryid=8)

--6.   Create a report that shows all 5companies by name 
--that sell products in the Seafood category.(Tables: Suppliers, Products & Categories)
select * from products
select * from suppliers
select * from categories

select productname from products where categoryid
=(select categoryid from categories where categoryname ='seafood')

select companyname from Suppliers where SupplierID in (select SupplierID from Products where categoryid
in (select categoryid from Categories where categoryname ='seafood'))

select distinct Categories.CategoryName, Products.ProductName,Suppliers.CompanyName from Categories inner join 
Products on Categories.CategoryID=Products.CategoryID inner join Suppliers
on Products.SupplierID=Suppliers.SupplierID where Categories.CategoryName='seafood'

select categoryid from categories where categoryname ='seafood'

--7  Write query using a “sub query” to display which Customers
--were served by which 	Employee use Northwind 
select * from customers
select * from employees
select * from orders

select contactname from Customers where customerid in (select customerid from orders where 
EmployeeID in (select EmployeeID from Employees))

----8.   Write query using a “sub query” to list of all the stores that have discount records
--use pubs
----9.    Write query using a “sub query” to name publishers have got titles in store in Seattle? Use pubs

----10.  Write query using a “sub query” to list all the authors available in Barnum’s store use pubs

----11.  Write query using a “sub query” to give the customer id and amount
--spent of the customer who spent the most using Northwind
----12.  Write query using a “sub query” to list all Northwind customers who have not placed an order.

-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called programming_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  item_id INTEGER(5) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(20),
  price DECIMAL (7,2),
  stock_quantity INTEGER(11),
  PRIMARY KEY (item_id)
  
--   Primary key id or item id(id?)
);

-- Creates new rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 56.00, 83), 
("computer", "electronics", 1000.00, 24), 
("lamp", "furniture", 3.23, 200), 
("cat", "entertainment", 0.00, 50), 
("cat", "penance",5000.00, 49),
("tv", "electronics", 500.00, 143), 
("small dog", "sports", 25.00, 0), 
("canned air", "entertainment", 8, 2356), 
("phonebook", "furniture", .03, 1111), 
("your seasonal hipster basil plant to kill off", "outdoor", 56.00, 83);










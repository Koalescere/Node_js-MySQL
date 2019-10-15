DROP DATABASE IF EXISTS b_amazonDB;

CREATE DATABASE b_amazonDB;

USE b_amazonDB;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Puma', 'Clothing', 100.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('SmartPhone', 'Electronics', 1000.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Harry_Potter', 'Literature', 30.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Flatscreen', 'Electronics', 399.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('crockpot', 'Cooking', 199.99, 250);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Puma", clothing, 100.00, 200), ("SmartPhone", Electronics, 1000.00, 1000), ("Harry_Potter", Literature, 30.00, 500), ("Flatscreen", Electronics, 399.99, 200), ("crockpot", cooking, 199.99, 250);

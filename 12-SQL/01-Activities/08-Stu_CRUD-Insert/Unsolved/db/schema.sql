-- deletes the books_db if it exists --
DROP DATABASE IF EXISTS books_db;
-- creates the books_db database --
CREATE DATABASE books_db;

-- selects the books_db databse --
USE books_db;

-- creates a biographies table --
CREATE TABLE biographies (
  -- the first column will be named id and have integer datatypes that increment by one as a new entry is added. The data can't be null --
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  -- the second column will be named name, the data can be any character of max length 100 char. The data must not be null --
  name VARCHAR(100) NOT NULL
);


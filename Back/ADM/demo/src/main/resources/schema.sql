CREATE DATABASE IF NOT EXISTS AdmDatabase;
USE AdmDatabase;

CREATE TABLE IF NOT EXISTS administrators (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(16) NOT NULL, UNIQUE
);

INSERT INTO administrators (
    name, password
) VALUES (
    'Daniel', 'daniel1234'
);
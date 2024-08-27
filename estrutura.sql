CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    status ENUM('done', 'pending') NOT NULL DEFAULT 'pending'
);
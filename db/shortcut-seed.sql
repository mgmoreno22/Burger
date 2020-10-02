-- Will reset database and put new info
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Cheesebuger'), ('Hamburger');
INSERT INTO burgers (burger_name, devoured) VALUES ("Grilled Chicken", true);

SELECT * FROM burgers;
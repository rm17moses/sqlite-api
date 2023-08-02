-- create the table DDL (database definition language)

CREATE table if not exits greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greeting text
);

-- DML (database manipulation language)

SELECT *
FROM greetings;
SELECT count(*)
FROM greetings;

INSERT INTO greetings (language, greeting) VALUES('IsiZulu', 'Sawubona')

-- add two more languages
INSERT INTO greetings (language, greeting) VALUES('SeSotho', 'Dumela')
INSERT INTO greetings (language, greeting) VALUES('French', 'Bonjour')

-- DELETE A ROW USING TWO METHODS
-- 1. delete from greetings id > 1;
-- 2. delete from greetings id in (2,3);


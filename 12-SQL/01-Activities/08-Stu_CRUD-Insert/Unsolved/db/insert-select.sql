-- Inserts data into the biographies table, the columns of which are id then name --
INSERT INTO biographies (id, name)
-- the values to be placed in each row
VALUES
    -- the first value is the id and the second value is the name --
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

SELECT * FROM biographies;

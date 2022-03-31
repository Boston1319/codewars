-- you will be given a table 'kata' with columns 'n', 'x', and 'y'. Return the 'id' and your result in a column named 'res'.
SELECT id,(n % x = 0 AND n % y = 0) AS res from kata
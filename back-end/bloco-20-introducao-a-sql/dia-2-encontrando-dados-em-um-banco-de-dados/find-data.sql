-- selecionar primeiro nome de actor
SELECT first_name  FROM actor;

-- selecione primeiro e segundo nome de actor
SELECT first_name, last_name FROM actor;

-- selecionar todos os campos da tabela actor (má prática)
SELECT * FROM actor;

-- unificar nome e sobrenome de actor em uma coluna
SELECT CONCAT(first_name, " ", last_name) AS `Nome Completo` FROM actor;
SELECT CONCAT(first_name, " ", last_name) AS "Nome Completo" FROM actor;
SELECT CONCAT(first_name, " ", last_name) AS nome_completo FROM actor;

-- (desafio) selecionar todos os registros com todos os campos da tabela film
SeLect * FROM film

-- selecionar primeiro nome de actor sem que se repita 
SELECT DISTINCT first_name FROM actor
SELECT DISTINCT first_name, last_name FROM actor

-- conte a quantidade de registros de actor
SELECT COUNT(*) FROM actor

-- conte a quantidade de registros de actor ignorando repetições
SELECT COUNT(DISTINCT first_name) FROM actor

-- limitar consulta de film em 10 resultados
SELECT * FROM film LIMIT 10 OFFSET 0
-- (mesma coisa)
SELECT * FROM film LIMIT 10

-- limitar actor a 10 resultados usando o offset saltando de 10 em 10
SELECT * FROM actor LIMIT 5 OFFSET 20

-- lista de actor em ordem acendente e descendente
SELECT * FROM actor ORDER BY first_name;
SELECT * FROM actor ORDER BY first_name ASC;
SELECT * FROM actor ORDER BY first_name, last_name;
SELECT * FROM actor ORDER BY first_name DESC, last_name DESC;
SELECT * FROM actor ORDER BY RAND()

-- dinamica
DROP DATABASE livraria;

CREATE DATABASE livraria;

CREATE TABLE livraria.livros (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	titulo VARCHAR(50) NOT NULL,
  	paginas INT,
  	ano_lancamento INT,
  	vendas INT
);

INSERT INTO livraria.livros (titulo, paginas, ano_lancamento, vendas) VALUES
('Livro #01', 100, 2022, 153),
('Metamorfose', 125, 1980, 500),
('Livro #02', NULL, 1999, 357),
('Harry Potter', 857, 2002, 854),
('O Cortiço', 159, 1985, 254);



-- 1 - todos os livros cadastrados na livraria
USE livraria;
SELECT * FROM livros;

SELECT id, titulo, paginas, ano_lancamento, vendas FROM livraria.livros;

SELECT * FROM livros;


-- 2 - quantidade de livros cadastrados 
SELECT COUNT(titulo) FROM livraria.livros
SELECT COUNT(id) FROM livraria.livros;


-- 3 - retornar todos os livros ordenados por nº de paginas de forma decrescente
SELECT * FROM livros ORDER BY paginas DESC;
SELECT 
	id, titulo, paginas, ano_lancamento, vendas 
FROM livraria.livros 
ORDER BY paginas DESC;

-- 4 - lista dos 3 livros mais vendidos
SELECT 
    *
FROM
    livros
ORDER BY vendas DESC
LIMIT 3;

-- 5 - retornar 3 livros ignorado os 2 primeiros resultados
SELECT * FROM livraria.livros LIMIT 3 OFFSET 2;

-- (bônus) retornar somente os livros que contenham o número de páginas cadastrado.
SELECT *
FROM livraria.livros
WHERE
    paginas NOT LIKE ''
    OR paginas > 0
    OR paginas IS NOT NULL;
    
SELECT * FROM livraria.livros
WHERE paginas != '';

SELECT * FROM livros WHERE paginas IS NOT NULL;

SELECT * FROM livraria.livros
WHERE paginas <> '';

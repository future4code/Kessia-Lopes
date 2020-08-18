### Exercício 1
a) VARCHAR(n) NOT NULL campo de strings com limite de caracteres, que precisa ser preenchido, não pode estar vazio.
DATE NOT NULL recebe uma data e tambem precisa srr preenchido.

b) Mostra o banco de dados existente e mostra as tabelas que existem neles.

c) Describe: Descreve os tipos de cada item da tabela.

### Exercicio 2
a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

b)Chave primária duplicada, não podem existir dois ids iguais.
c) Os valores inseridos não correspondem aos valores das colunas. Faltam colunas.
Corrigido:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) O campo name não existe e também não estã recebendo um valor.
Corrigido:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Tarcisio Meira",
  400000,
  "1949-04-18", 
  "male"
);

e) Valor da data incorreto. O campo de data não recebe o formato esperado, não está como string.
Corrigido:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercicio 3
a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos"
c)Aparece uma linha com todos os valores null
d) SELECT id, name, salary from Actor WHERE salary < 500000;
e) Retornou corretamente a linha com id 002 e a linha com null

### Exercicio 4
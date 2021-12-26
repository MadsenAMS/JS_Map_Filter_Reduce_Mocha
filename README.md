# JS (Map, Filter e Reduce) Aplicando TDD (com Mocha)
Repositório para exercício de Map, Filter e Reduce para curso de JS da DIO.  
Aproveitei o exercício para praticar teste unitário utilizando mocha.  
O arquivo index.js apenas utiliza os métodos do arraymanager.js (na pasta 'assets/js') para: 

- Dobrar os valores de um array inicial utilizando 'map';
- Retornar apenas números pares de um array inicial utilizando 'filter';
- Retornar a soma dos itens de um array inicial utilizando 'reduce'.

Os testes unitários dos três métodos do arraymanager.js estão no arquivo arraymanager.test.js na pasta '/test'.  
Estes testes foram escritos antes dos métodos da classe ArrayManager, conforme prática de TDD.  
Foi utilizando Mocha (describe/it) com 'assert' nativo do NodeJS.

"# desafio-deliverit" 

**Neste desfio foi utilizado nodejs no backend, handlebars no frontend, sqlite para o banco de dados e docker para conteinerização.

**Não foi feita a parte de testes.

**Para executar o projeto sem o docker, basta instalar o nodejs na máquina, abrir o terminal e digitar: node index.js.

**Caso deseje rodar o projeto em um container docker siga as instruções abaixo:

-docker build -t deliverit

--docker run -p 3000:3000 -d deliverit
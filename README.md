projeto github:
https://github.com/andrewarosario/workshop-angular

workshop aula 2:
https://stormy-astronaut-b2d.notion.site/Roteamento-avan-ado-com-RxJS-dccf563851b9490ba359b6cdb09095ce
workshop aula 3:
https://stormy-astronaut-b2d.notion.site/Testes-no-Angular-a5ebc808578d4354814f77f25985759e

### Configurações iniciais:

- apagar tudo que tiver no app.component.html e deixar só o router outlet pra usar as rotas

### Estruturando o projeto:

- criar o componente shared que vai ter os componentes que serão compartilhados com outros componentes
- ao criar um novo componente, ex.: users, vamos também criar uma pasta shared, mas pra poder guardar a service que vai ser compartilhada com o componente users

### Utilizando rotas

- configuraremos a utilização de lazy load no projeto no app.routes.ts (não carregar todas as rotas de uma vez)

### Instalar o NX para o projeto poder ficar mais cacheável (deixar o projeto mais escalável e robusto)

- digitar no terminal: npx nx@latest init e dar enter no build e test, depois botar em skip for now se não quiser remoto
- instalar a extensão nx
- criar os módulos pela extensão digitando lib ao apertar em generate e digitando o nome e modules/nome
- o nx já alterou o arquivo tsconfig.base.json para poder alterarmos lá no app.routes.ts adicionando só o nome do path quando for fazer o import. ex.: users
- adicionar no tsconfig.base.json: "baseUrl":"./" para poder parar de dar erro no tsconfig.json

### Configurar o fake backend

- criar uma pasta backend e adicionar o arquivo db.json que irá ter os dados que irão retornar
- instalar o pacote json-server com npm install json-server
- iniciar o backend com comando npx json-server db.json

### Iniciando as models

- dentro do projeto users vamos criar pasta models em src/lib/users e criar o arquivo user.ts
- vamos aproveitar que já temos o json (https://65009f9718c34dee0cd53786.mockapi.io/users) e jogar ele no site que cria models (https://transform.tools/json-to-typescript)

### Utilizando as services

- vamos acessar as APIs através das Services
- na nossa service vamos usar os dados mockados do json-server
- como qualquer outra api vamos precisar adicionar no construtor a injeção de dependencia do http
- adicionar no app.config.ts o HttpClient (provideHttpClient())

### Utilizando o users.component.html

- vamos precisar adicionar os nossos imports diretamente no arquivo component.ts de cada html, pois não existe mais um arquivo modules.ts ou @NgModule igual nas versões anteriores do angular
- essa pagina vai listar os usuarios para redirecionar para um proximo novo componente que vai detalhar os dados do usuario

### Criar novo componente user-detail

- vamos poder criar atraves do nx generate - component, apertando botão direito em cima da pasta
- após isso, vamos ter que adicionar o export dele em users/index.ts para que outros componentes possam enxergar ele
- após isso, vamos adicionar as rotas no app/app.routes.ts dentro da rota de users, através do children
- vamos criar uma função dentro de utils get-params-id.ts só para poder retornar os parametros sem ficar adicionando vários subscribes dentro do código

### Configurações iniciais:

- apagar tudo que tiver no app.component.html e deixar só o router outlet pra usar as rotas

### Estruturando o projeto:

- criar o componente shared que vai ter os componentes que serão compartilhados com outros componentes
- ao criar um novo componente, ex.: users, vamos também criar uma pasta shared, mas pra poder guardar a service que vai ser compartilhada com o componente users

### Utilizando rotas

- configuraremos a utilização de lazy load no projeto no app.routes.ts (não carregar todas as rotas de uma vez)

### Instalar o NX para o projeto poder ficar mais cacheável (deixar o projeto mais escalável e robusto)

- digitar no terminal: npx nx@latest init e dar enter no build e test, depois botar em skip for now se não quiser remoto

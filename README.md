Desafio-React
- Tarefa 1 - Listagem de usuários
Para essa tarefa crie uma página simples que contenha uma tabela de usuários.
Cada linha da tabela deverá ser um usuário, a primeira e segunda colunas serão ID e Nome, respectivamente.
A última célula de cada linha deverá ter opções de excluir e editar o usuário correspondente.
Por último, a página deverá ter um botão de "criar novo usuário", que ao clicar, exiba a página de criação.

Bônus: Usuários pré-cadastrados
Considere que a tabela tenha 5 ou mais usuários pré-cadastrados e seja exibida assim que o servidor estiver de pé. Para isso pode-se "mockar" os dados ou usar um serviço de mock equivalente, como o JSONPlaceholder.

Tarefa 2 - Criação de usuário
Criar uma tela que contenha um formulário para a criação de um novo usuário a ser inserido na tabela da tarefa anterior.

Exemplo de usuário:
{
"id": 1,
"name": "John Doe",
"email": "john.doe@gmail.com",
"address": {
"street": "Av. das Américas, 5500",
"suite": "Apto 403",
"city": "Rio de Janeiro",
"zipcode": "12456-789"
},
"phone": "(99)99999-9999"
}

Todos os campos são inseridos manualmente (inclusive o campo ID) e devem seguir a estrutura acima.

Ao final do formulário, deverá haver um botão que insira o novo usuário na tabela com as informações incluídas, além de exibir novamente a página de listagem de usuários.

Bônus 1: Campos obrigatórios e validações
Realizar a validação dos campos obrigatórios: id, name, email.

id- aceitar somente valores inteiros/não negativos e não pode estar vazio;
name- não pode estar vazio e deve ser um e-mail válido;
email- não pode estar vazio e deve ser um e-mail válido;
phone- não é obrigatório, mas caso o usuário insira um telefone, deve estar no formato (99) 99999-9999
Bônus 2: Preview de usuário
Criar um preview que mostre as informações do usuário à medida que as informações são inseridas. Apenas para fins de visualizar o que está sendo inserido.

Tarefa 3 - Editar e deletar usuário
Na página de listagem de usuários, os botões editar e deletar devem funcionar da seguinte maneira:

Editar: 1. Redirecionar o usuário para uma página similar a de criação de usuário (podendo ser a mesma);
2. Os dados do usuário devem estar presentes em cada respectivo campo.

Deletar: 1. Remover totalmente o usuário da listagem.

Informações adicionais
Caso deseje utilizar pacotes ou bibliotecas de terceiros como redux ou react-router, fique à vontade;
Não é necessário um banco de dados para guardar os usuários, tudo será manejado por estado;
Não se preocupe em terminar todas as tarefas. Concentre-se em escrever código limpo, seguindo os princípios do DRY e uma estrutura que faça sentido;
Ao terminar, edite este arquivo e adicione as diretrizes para iniciar o projeto, podendo estar acima ou abaixo do conteúdo deste ReadMe.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

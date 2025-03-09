# Easy Car

**Easy Car** é um aplicativo móvel desenvolvido para ajudar os usuários a gerenciar as informações sobre seus veículos de maneira eficiente. A solução utiliza **Node.js** no back-end e **React Native** com **Expo** no front-end, permitindo uma experiência de usuário fluida e otimizada tanto para dispositivos Android quanto iOS.

## Tecnologias Utilizadas

- **Back-end:**
  - **Node.js**: Plataforma JavaScript para desenvolvimento do servidor.
  - **Express.js**: Framework para construção da API RESTful.
  - **SQLite**: Banco de dados relacional leve para armazenamento de dados.
  - **Controller-Repository-Service Architecture**: Arquitetura modular com Controllers para manipulação de requisições, Repositories para acesso ao banco de dados e Services para lógica de negócios.

- **Front-end:**
  - **React Native**: Framework para desenvolvimento de aplicações móveis cross-platform.
  - **Expo**: Ferramenta que simplifica o desenvolvimento com React Native.
  - **npm**: Gerenciador de pacotes para dependências do front-end.

## Funcionalidades

- **Cadastro de Veículos**: Permite que os usuários registrem informações sobre seus carros, como modelo, ano, placa, etc.
- **Edição de Veículos**: Oferece a possibilidade de editar as informações dos veículos cadastrados.
- **Consulta de Veículos**: Usuários podem consultar a lista de veículos cadastrados e visualizar detalhes.
- **Armazenamento Local (SQLite)**: Todos os dados dos veículos são armazenados localmente em um banco de dados SQLite, permitindo acesso rápido e eficiente.
- **Interface Intuitiva**: O front-end é projetado para ser simples e fácil de usar, com uma navegação fluida entre as telas.

## Arquitetura

O código segue a arquitetura modular de **Controllers**, **Repositories** e **Services**:

- **Controllers**: Responsáveis pelo controle das requisições HTTP (CRUD).
- **Repositories**: Abstraem a lógica de acesso ao banco de dados SQLite.
- **Services**: Contêm a lógica de negócios do aplicativo.

Essa abordagem modular facilita a manutenção e a escalabilidade da aplicação.

## Como Rodar o Projeto

### Requisitos

- Node.js (v16 ou superior)
- npm (v7 ou superior)
- Expo CLI (v5 ou superior)

### Instruções para o Back-end

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/easy-car.git
cd easy-car

# Maya RPG Backend

Backend da aplicação Maya RPG desenvolvido utilizando NestJS, Prisma ORM, MySQL e Docker.

O sistema foi criado para auxiliar o acompanhamento fisioterapêutico da clínica Maya RPG, permitindo gerenciamento de pacientes, autenticação de usuários e organização de informações clínicas.

---

# Tecnologias Utilizadas

* Node.js
* NestJS
* Prisma ORM
* MySQL
* Docker
* Docker Compose
* JWT Authentication

---

# Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* CRUD de pacientes
* CRUD de exercícios
* CRUD de sessões
* CRUD de evoluções
* CRUD de agendamentos
* CRUD de notificações
* Integração com banco MySQL
* Containerização com Docker

---

# Estrutura do Projeto

```txt
src/
├── auth
├── usuarios
├── pacientes
├── exercicios
├── sessoes
├── evolucoes
├── agendamentos
├── notificacoes
├── prisma
```

---

# Configuração do Ambiente

## Variável de ambiente

Arquivo `.env`

```env
DATABASE_URL="mysql://root:123456@localhost:3306/maya_rpg"
```

---

# Executando com Docker

## 1. Abrir Docker Desktop

---

## 2. Rodar o projeto
## Caso a porta 3002 esteja em uso, altere a porta no docker-compose.yml.

```bash
docker-compose up --build

```

---

# Portas Utilizadas

| Serviço    | Porta |
| ---------- | ----- |
| API NestJS | 3002  |
| MySQL      | 3306  |

---

# Rotas da API

## Login

```http
POST /auth/login
```

Body:

```json
{
  "email": "admin@gmail.com",
  "senha": "123456"
}
```

---

## Usuários

```http
POST /usuarios
```

---

## Pacientes

```http
POST /pacientes
GET /pacientes
PUT /pacientes/:id
DELETE /pacientes/:id
```

---

## Exercícios

```http
POST /exercicios
GET /exercicios
PUT /exercicios/:id
DELETE /exercicios/:id
```

---

## Sessões

```http
POST /sessoes
GET /sessoes
PUT /sessoes/:id
DELETE /sessoes/:id
```

---

## Evoluções

```http
POST /evolucoes
GET /evolucoes
PUT /evolucoes/:id
DELETE /evolucoes/:id
```

---

## Agendamentos

```http
POST /agendamentos
GET /agendamentos
PUT /agendamentos/:id
DELETE /agendamentos/:id
```

---

## Notificações

```http
POST /notificacoes
GET /notificacoes
PUT /notificacoes/:id
DELETE /notificacoes/:id
```

---

# Containerização

O sistema foi containerizado utilizando Docker e Docker Compose, permitindo execução padronizada e facilitando deploy em ambientes cloud native.

O Docker Compose realiza:

* Inicialização da API
* Inicialização do MySQL
* Comunicação entre containers
* Persistência de dados com volumes

---

# Demonstração

## Containers rodando

![Docker](images/docker.png.jpeg)

## POST Paciente

![Post](images/post.jpeg)

## GET Pacientes

![Get](images/get.jpeg)

## PUT Paciente

![Put](images/put.jpeg)

## DELETE Paciente

![Delete](images/delete.jpeg)




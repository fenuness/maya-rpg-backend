# Maya RPG Backend

Backend do sistema Maya RPG desenvolvido com:

- NestJS
- Prisma ORM
- MySQL
- Docker

## Como executar

### 1. Abrir Docker Desktop

### 2. Rodar:

```bash
docker-compose up --build


Rotas

Login

POST /auth/login

Usuários

POST /usuarios

Pacientes

POST /pacientes
GET /pacientes
PUT /pacientes/:id
DELETE /pacientes/:id

Tecnologias
Node.js
NestJS
Prisma
MySQL
Docker
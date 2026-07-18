<div align="center">

# 💸 Splitwise Clone

**A production-grade expense sharing application inspired by Splitwise, built with modern backend engineering practices and a scalable architecture.**

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

</div>

---

## 📑 Table of Contents

- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Current Features](#-current-features)
- [Roadmap](#-roadmap)
- [Getting Started](#-getting-started)
- [Branch Strategy](#-branch-strategy)
- [Development Principles](#-development-principles)
- [Planned Tech Stack](#-planned-tech-stack)
- [License](#-license)

---

## 🛠 Tech Stack

### Backend

- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker
- JWT Authentication *(In Progress)*
- Zod *(In Progress)*
- bcrypt *(In Progress)*

### Frontend

- React
- Vite
- TypeScript

---

## 🏗 Architecture

The backend follows a **feature-based architecture** with clear separation of responsibilities.

```text
Request
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
Prisma
   │
   ▼
PostgreSQL
```

---

## 📂 Project Structure

```text
splitwise-clone/

├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── lib/
│   │   │   └── prisma.ts
│   │   ├── middleware/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── routes/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│
└── docker-compose.yml
```

---

## ✅ Current Features

### Project Setup

- Express + TypeScript backend
- React + Vite frontend
- Dockerized PostgreSQL
- Prisma ORM integration
- Health check endpoint
- Environment configuration
- Feature-based folder structure

### Database

- PostgreSQL running in Docker
- Prisma Client configured
- Initial migration created

Current `User` model:

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Repository Layer

Implemented:

- Create User
- Find User by Email
- Find User by ID

---

## 🗺 Roadmap

### Authentication

- [ ] User Registration
- [ ] Login
- [ ] JWT Authentication
- [ ] Refresh Tokens
- [ ] Password Hashing
- [ ] Protected Routes

### Groups

- [ ] Create Group
- [ ] Invite Members
- [ ] Join Groups

### Expenses

- [ ] Add Expense
- [ ] Equal Split
- [ ] Unequal Split
- [ ] Percentage Split
- [ ] Expense History

### Settlements

- [ ] Balance Calculation
- [ ] Debt Simplification Algorithm
- [ ] Settle Up

### Realtime

- [ ] Socket.IO
- [ ] Live Expense Updates
- [ ] Notifications

### Production Features

- [ ] Redis
- [ ] BullMQ
- [ ] Docker Compose
- [ ] CI/CD
- [ ] Unit Testing
- [ ] Integration Testing
- [ ] API Documentation
- [ ] Logging
- [ ] Rate Limiting

---

## 🚀 Getting Started

### Clone

```bash
git clone <repository-url>
cd splitwise-clone
```

### Backend

```bash
cd backend
npm install
```

### Start PostgreSQL

```bash
docker compose up -d
```

### Run Prisma Migration

```bash
npx prisma migrate dev
```

### Start Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

Health endpoint:

```
GET /health
```

---

## 🌿 Branch Strategy

Each major feature is developed in its own branch.

Examples:

```
feature/user-auth
feature/groups
feature/expenses
feature/settlements
feature/realtime
```

---

## 📐 Development Principles

- Feature-based architecture
- Layered backend design
- Type-safe APIs
- Modular and scalable codebase
- Production-oriented development
- Clean separation of concerns

---

## 📦 Planned Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, Vite, TypeScript |
| Backend | Express, TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Validation | Zod |
| Authentication | JWT, bcrypt |
| Realtime | Socket.IO |
| Cache | Redis |
| Queue | BullMQ |
| Storage | S3 / MinIO |
| Containerization | Docker |
| CI/CD | GitHub Actions |

---

## 📄 License

MIT
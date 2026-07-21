<div align="center">

# 💸 Splitwise Clone

**A production-grade expense sharing application inspired by Splitwise, built with modern backend engineering practices, scalable architecture, and clean software design principles.**

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

# 📑 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Goals](#-project-goals)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Current Features](#-current-features)
- [Database Design](#-database-design)
- [Backend Concepts Implemented](#-backend-concepts-implemented)
- [Roadmap](#-roadmap)
- [Getting Started](#-getting-started)
- [Branch Strategy](#-branch-strategy)
- [Development Principles](#-development-principles)
- [License](#-license)

---

# 🛠 Tech Stack

## Backend

- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker
- JWT Authentication
- bcrypt
- Zod

## Frontend

- React
- Vite
- TypeScript

---

# 🎯 Project Goals

This project is not just about cloning Splitwise.

The goal is to build a **production-oriented backend** while learning real-world backend engineering concepts such as:

- Layered Architecture
- REST API Design
- Authentication & Authorization
- Relational Database Modeling
- Database Transactions
- Prisma ORM
- Dockerized Development
- Scalable Backend Design
- Clean Code Principles
- Production-ready APIs

---

# 🏗 Architecture

The backend follows a **feature-based layered architecture**.

```text
                HTTP Request
                     │
                     ▼
                 Express Routes
                     │
                     ▼
          Authentication Middleware
                     │
                     ▼
                Controllers
                     │
                     ▼
                 Services
                     │
                     ▼
                Prisma Client
                     │
                     ▼
                 PostgreSQL
```

---

# 📂 Project Structure

```text
splitwise-clone/

├── backend/
│
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── src/
│   │
│   │   ├── lib/
│   │   │     └── prisma.ts
│   │   │
│   │   ├── middleware/
│   │   │
│   │   ├── modules/
│   │   │
│   │   │     ├── auth/
│   │   │     ├── users/
│   │   │     └── group/
│   │   │
│   │   ├── routes/
│   │   ├── types/
│   │   ├── utils/
│   │   │
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

# ✅ Current Features

## 🚀 Project Setup

- Express + TypeScript backend
- React + Vite frontend
- Dockerized PostgreSQL
- Prisma ORM
- Environment configuration
- Feature-based architecture

---

## 🔐 Authentication

Implemented:

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Get Current User Endpoint

---

## 👥 Groups

Implemented:

- Create Group
- Automatically add creator as OWNER
- Fetch all groups the authenticated user belongs to
- Group membership using many-to-many relationship
- Prisma Transactions for atomic group creation

---

## 🗄 Database

Implemented:

- User Model
- Group Model
- GroupMember Join Table
- GroupRole Enum
- Prisma Relations
- Database Migrations

---

# 🗄 Database Design

Current schema consists of four entities:

- User
- Group
- GroupMember
- GroupRole

Relationship:

```text
User
 ▲
 │
 │
GroupMember
 │
 ▼
Group
```

Highlights:

- One User → Many Groups Created
- One User → Many Group Memberships
- One Group → Many Members
- Composite Unique Constraint on `(userId, groupId)`
- OWNER / MEMBER role support

---

# 📚 Backend Concepts Implemented

This project is intentionally built to learn backend engineering rather than just complete features.

## Architecture

- Feature-Based Architecture
- Layered Architecture
- Separation of Concerns
- Thin Controllers
- Service Layer Pattern

---

## API Design

- RESTful APIs
- HTTP Status Codes
- API Contracts
- Request Validation (Zod)
- Response Design

---

## Authentication

- JWT Authentication
- Protected Routes
- Password Hashing
- Express Request Augmentation
- Authentication Middleware

---

## Database

- Relational Database Design
- One-to-Many Relationships
- Many-to-Many Relationships
- Join Tables
- Foreign Keys
- Prisma Relations
- Relation Filtering
- Composite Unique Constraints

---

## Business Logic

- Database Transactions
- Atomic Operations
- Business Rules
- Ownership Model
- Role-based Membership

---

# 🗺 Roadmap

## Authentication

- [x] User Registration
- [x] User Login
- [x] Password Hashing
- [x] JWT Authentication
- [x] Protected Routes
- [ ] Refresh Tokens

---

## Groups

- [x] Create Group
- [x] Get My Groups
- [ ] Get Group Details
- [ ] Add Members
- [ ] Remove Members
- [ ] Leave Group
- [ ] Delete Group

---

## Expenses

- [ ] Add Expense
- [ ] Equal Split
- [ ] Unequal Split
- [ ] Percentage Split
- [ ] Expense History

---

## Balances

- [ ] Calculate Balances
- [ ] Simplify Debts
- [ ] Settle Up

---

## Production Features

- [ ] Redis
- [ ] BullMQ
- [ ] Rate Limiting
- [ ] Logging
- [ ] API Documentation
- [ ] Unit Testing
- [ ] Integration Testing
- [ ] CI/CD
- [ ] Docker Compose Production Setup

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>
cd splitwise-clone
```

---

## Backend Setup

```bash
cd backend
npm install
```

---

## Start PostgreSQL

```bash
docker compose up -d
```

---

## Run Prisma Migration

```bash
npx prisma migrate dev
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Start Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🌿 Branch Strategy

Each major feature is developed in its own branch.

Example:

```text
feature/auth
feature/groups
feature/expenses
feature/settlements
feature/realtime
```

---

# 📐 Development Principles

- Clean Architecture
- Feature-based Folder Structure
- Layered Backend Design
- Type-safe APIs
- Scalable Codebase
- Production-oriented Development
- Business-first Design
- Modular Services
- Clean Separation of Concerns

---

# 📄 License

MIT License

Made with ❤️ by **Shivam Juyal**
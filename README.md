# REST_API
A secure REST API built with NestJS for user registration, login, and JWT-based authentication. It uses PostgreSQL with TypeORM and bcrypt for password hashing. Ideal for integrating authentication into full-stack applications.

# 🔐 Secure REST API for User Authentication

A RESTful API built with [NestJS](https://nestjs.com/) to handle secure user authentication and registration. It uses PostgreSQL as the database, TypeORM for object-relational mapping, JWT for authentication, and bcrypt for password hashing.

---

## 🧰 Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT, Passport
- **Password Security**: bcrypt
- **Environment Variables**: dotenv

---

## 🚀 Features

- ✅ User Registration
- ✅ Secure Login with JWT
- ✅ Password Hashing with Bcrypt
- ✅ Role-based Access (optional)
- ✅ PostgreSQL + TypeORM Integration
- ✅ Modular Architecture (Auth, User)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Maishara/REST_API.git

cd REST_API

unzip node_modules

# Install dependencies
npm install

⚙️ Environment Setup
Create a .env file in the root directory and add the following:
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_pg_username
DB_PASSWORD=your_pg_password
DB_NAME=your_db_name

# JWT
JWT_KEY=your_jwt_secret_key

🛠️ Running the App
# Development mode
npm run start:dev

📮 API Endpoints
🔐 Auth
POST /auth/register
Registers a new user.
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "phone": "01#########"
}

POST /auth/login
Logs in an existing user.
{
  "email": "john@example.com",
  "password": "password123"
}

Returns:
{
  "access_token": "your.jwt.token"
}

🗂️ Project Structure
src/
│
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   ├── local.strategy.ts
│
├── user/
│   ├── user.entity.ts
│   ├── user.service.ts
│   ├── user.controller.ts
│   ├── dto/
│       └── create-user.dto.ts
│
├── main.ts
└── app.module.ts

🛡️ Security Notes
Always store sensitive information like JWT_KEY and database credentials in environment variables.

Disable synchronize: true in production. Use migrations instead.

Add validation pipes and DTO validation for input sanitization.



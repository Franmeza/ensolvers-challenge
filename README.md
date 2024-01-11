# Ensolvers challenge

This project is a simple web application that allows to take notes, tag, and filter them by category, active or achived.

# Backend

- [Node.js] (v18.18.0)
- [npm] (v9.8.1)
- [Express] (v ^4.18.2)
- [Sequelize] (v ^6.35.2)
- [PostgreSQL](v15.4)
- [pg] (v ^8.11.3)
- [pg-hstore] (v ^2.3.4)

# Frontend

- [Vite] (v5.0.8)
- [tailwindcss] (v3.4.1)
- [React] (18.2.0)
- [react-hook-form] (v7.49.3)
- [react-modal] (v3.16.1)
- [react-icons] (v4.12.0)
- [react-router-dom] (v6.21.1)
- [sweetalert2] (v11.6.13)

# backend/.env

PORT =
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_USER=

# frontend/.env

VITE_APP_API_URL=

## Setup

### 1. Install Backend Dependencies

cd backend
npm install

### 2. Database Setup

Create a database in PostrgreSQL

### 3. Run Migrations

npx sequelize-cli db:migrate

### 4. Run Backend

npm start

### 5. Install Frontend Dependencies

cd ../frontend
npm install

### 6. Run Frontend

npm run dev
Go to http://localhost:3000 in your browser.

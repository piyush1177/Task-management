Task Management Application (Assignment 1)
Objective
To build a full-stack web application where users can register, log in, and manage their personal tasks securely.

Tech Stack
Frontend: React.js (Vite)
Backend: Node.js, Express.js
Database: MySQL
Authentication: JWT (JSON Web Token)

API Type: REST APIs

Features
Authentication & User Management
User Registration
User Login
Logout functionality
Password encryption using bcrypt
JWT-based authentication for secure access
Task Management
Create Task
View Task List
Edit Task
Delete Task
Task Status:
Pending
In Progress
Completed

Each task is linked to the logged-in user Users can view and manage only their own tasks

Project Structure
backend/
  controllers/
  routes/
  middleware/
  config/
frontend/
  pages/
  services/

Database Schema
Users Table
id (Primary Key)
name
email (Unique)
password (Hashed)
created_at
updated_at


Tasks Table
id (Primary Key)
title
description
status
user_id (Foreign Key → users.id)
created_at
updated_at

Setup Instructions
Backend Setup
cd backend
npm install
node server.js

Frontend Setup
cd frontend
npm install
npm run dev

Security
Passwords are securely hashed using bcrypt
JWT is used to protect API routes
Users cannot access tasks created by other users

Conclusion

This project demonstrates a secure full-stack task management system with proper authentication, authorization, and database relationships using MySQL.

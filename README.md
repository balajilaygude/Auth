
# Authentication & Protected Dashboard System

## Overview

Authentication & Protected Dashboard System is a full-stack web application that provides secure user registration, login, and access-controlled dashboard functionality. The application ensures that only authenticated users can access protected resources and view product data through secure API endpoints.

The project was built to gain hands-on experience with authentication, authorization, API security, protected routing, and full-stack application architecture using the MERN ecosystem.

## Key Features

* User registration and login system
* JWT-based authentication and authorization
* Password hashing using bcrypt
* Protected dashboard accessible only to authenticated users
* Private routing implementation in React
* Secure REST API development
* Product data fetching from authenticated endpoints
* Form validation using Joi
* Responsive user interface with Tailwind CSS
* MongoDB Atlas cloud database integration
* Toast notifications for user feedback
* Fully deployed frontend application

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* React Toastify
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* Joi
* CORS
* body-parser
* dotenv

### Deployment

* Vercel (Frontend)
* MongoDB Atlas (Database)

## Architecture

Frontend (React + Tailwind CSS)
↓
Protected Routes (React Router DOM)
↓
Axios API Requests
↓
Backend (Node.js + Express.js)
↓
JWT Authentication Middleware
↓
MongoDB Atlas (Mongoose)

## Challenges Faced

### 1. Authentication & Authorization

Implementing secure authentication required generating and validating JWT tokens while ensuring protected routes remained inaccessible to unauthorized users.

### 2. Route Protection

Creating private routes on the frontend involved managing authentication state and redirecting unauthenticated users to the login page.

### 3. Secure Password Storage

User passwords needed to be securely stored using bcrypt hashing to prevent exposure of sensitive information.

### 4. API Security

Protecting backend endpoints required middleware-based token verification and proper validation of incoming requests.

## Security Implementations

* JWT authentication and authorization
* Password hashing with bcrypt
* Protected API routes
* Request validation using Joi
* Environment variable management with dotenv
* Secure middleware architecture

## Live Project

Live Demo:
https://auth-frontend-five-theta.vercel.app/

## Images

<img width="1918" height="912" alt="Screenshot 2026-07-15 122523" src="https://github.com/user-attachments/assets/1d7275a7-dc88-42c8-ae01-659f6c2701b8" />

<img width="1918" height="910" alt="Screenshot 2026-07-15 121302" src="https://github.com/user-attachments/assets/5016351c-3b20-4289-aba7-a4d02629ae63" />

<img width="1918" height="912" alt="Screenshot 2026-07-15 121322" src="https://github.com/user-attachments/assets/205896d3-8f0b-48bd-838d-72081673ed41" />

<img width="1918" height="912" alt="Screenshot 2026-07-15 121242" src="https://github.com/user-attachments/assets/14bf5f35-d91f-43e6-b449-be35e62c0123" />




## Impact

This project demonstrates full-stack development skills, authentication and authorization implementation, REST API development, database integration, route protection, and security best practices. It showcases the ability to build secure, production-ready web applications using React, Node.js, Express.js, and MongoDB.

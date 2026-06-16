<img width="1918" height="912" alt="Screenshot 2026-06-13 200806" src="https://github.com/user-attachments/assets/85406782-c5cd-4886-a5b5-26ef80d4b799" />
<img width="1918" height="912" alt="Screenshot 2026-06-16 195538" src="https://github.com/user-attachments/assets/b956a27a-1d7a-4af0-991a-12b0d3b99121" />
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
<img width="1918" height="911" alt="Screenshot 2026-06-16 195504" src="https://github.com/user-attachments/assets/6d3bb880-a7bc-4377-b1dd-30660caf5e42" />
<img width="1918" height="915" alt="Screenshot 2026-06-16 195451" src="https://github.com/user-attachments/assets/5933f5b1-a32b-44d0-9031-83bfecad549d" />
<img width="1918" height="912" alt="Screenshot 2026-06-16 195538" src="https://github.com/user-attachments/assets/6b7f0189-f625-4c03-b1e0-d08f8ba6cbf9" />





## Impact

This project demonstrates full-stack development skills, authentication and authorization implementation, REST API development, database integration, route protection, and security best practices. It showcases the ability to build secure, production-ready web applications using React, Node.js, Express.js, and MongoDB.

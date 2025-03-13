# Ecommerce Application Backend

Welcome to the backend repository for our Ecommerce Application! This repository contains the backend implementation using Expressjs, Mongoose, JWT(JSON Web Tokens), Bcrypt, and Docker.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Swagger Documentation](#swagger-documentation)

## Features

- _Authentication_: Secure user authentication using JWT and password hashing with Bcrypt.
- _User Management_: CRUD operations for managing users.
- _Product Management_: CRUD operations for managing products.
- _Order Management_: Create, read, update, and delete orders.
- _Authorization_: Role-based access control for different resources.
- _Docker Support_: Easily deployable with Docker.## Usage

### Swagger Documentation

The API endpoints are documented using Swagger. After starting the server, you can access the Swagger UI documentation by navigating to the following URL in your web browser:

https://genspark-23b1.onrender.com/apis/

## To run locally:

1. _Clone the repository_:

   ```bash
   https://github.com/SanjaykECE/Genspark.git
   ```

2. _Install dependencies_:

   ```bash
   cd app
   npm install
   ```

3. _Set up environment variables_:

   Create a .env file in the root directory and add the following variables:

   ```bash
   dotenv
   PORT=3000
   MONGODB_URI=<Your MongoDB URI>
   JWT_ACCESS_SECRET=<Your JWT secret key>
   JWT_REFRESH_SECRET=<Your JWT refresh key>
   MAIL_USER=<Your MAIL_USER>
   MAIL_PASS=<Your MAIL_PASS>
   ```

4. _Start the server_:

   ```bash
   npm start
   ```

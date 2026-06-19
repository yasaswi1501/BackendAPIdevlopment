# Backend API Development

## Description

A RESTful Backend API built using Node.js and Express.js for user management operations. This project demonstrates CRUD (Create, Read, Update, Delete) functionality using API endpoints and in-memory data storage.

## Features

* Create a new user
* Get all users
* Get user by ID
* Update user details
* Delete user
* JSON response handling
* REST API architecture

## Technologies Used

* Node.js
* Express.js
* JavaScript
* REST API

## Project Structure

BackendAPIdevlopment/

├── server.js

├── package.json

├── package-lock.json

└── .gitignore

## Installation

1. Clone the repository

```bash
git clone https://github.com/yasaswi1501/BackendAPIdevlopment.git
```

2. Navigate to project folder

```bash
cd BackendAPIdevlopment
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

## API Endpoints

### Home Route

```http
GET /
```

Returns API welcome message.

### Get All Users

```http
GET /users
```

Returns all users.

### Get User By ID

```http
GET /users/:id
```

Returns a specific user.

### Create User

```http
POST /users
```

Example Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update User

```http
PUT /users/:id
```

### Delete User

```http
DELETE /users/:id
```

## Author

Yasaswi

## License

This project is created for educational and internship purposes.

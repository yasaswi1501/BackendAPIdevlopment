const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data storage (acts like a simple database)
let users = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", age: 22 },
  { id: 2, name: "Priya Singh", email: "priya@example.com", age: 21 }
];

// =====================
// GET ENDPOINTS
// =====================

// GET / - Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to DecodeLabs Backend API!",
    version: "1.0.0",
    endpoints: {
      getAllUsers: "GET /users",
      getUserById: "GET /users/:id",
      createUser: "POST /users",
    }
  });
});

// GET /users - Get all users
app.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

// GET /users/:id - Get single user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

// =====================
// POST ENDPOINT
// =====================

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;

  // Validation
  if (!name || !email || !age) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email and age"
    });
  }

  if (typeof age !== 'number' || age < 1) {
    return res.status(400).json({
      success: false,
      message: "Age must be a valid number"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    age
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    data: newUser
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
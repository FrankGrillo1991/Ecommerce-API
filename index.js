const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const mongoose = require('mongoose'); // Import mongoose if using MongoDB
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or 3000

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// --- MongoDB Connection (Optional - Only if you're using MongoDB) ---
// const dbURI = 'mongodb://localhost:27017/ecommerceDB'; // Replace with your MongoDB URI
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Connected to MongoDB'))
//  .catch(err => console.error('Error connecting to MongoDB:', err));
// ---------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

// --- Example Product Routes (to be expanded) ---
app.get('/products', (req, res) => {
    res.json({ message: 'List of products' });
});

app.post('/products', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Product created', data: req.body });
});

// -----------------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
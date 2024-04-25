const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


// Serve static files with caching headers
app.use(express.static('public', { maxAge: 31536000 })); // 1 year cache

const compression = require('compression');
app.use(compression());


// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


///Server Port
app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT}`);
})
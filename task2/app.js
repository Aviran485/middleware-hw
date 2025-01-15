const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Logger Middleware
const logger = (req, res, next) => {
    const timestamp = new Date();
    console.log(method, url, time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay(), time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
    next();
};

// Authorization Middleware
const checkAdmin = (req, res, next) => {
    const user = req.query.user;
    if (user !== 'admin') {
        return res.status(403).send('Access Denied');
    }
    next();
};

app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/admin', checkAdmin, (req, res) => {
    res.send('<h1>Welcome to the Admin Page</h1>');
});

app.get('/public', (req, res) => {
    res.send('<h1>This is a public page</h1>');
});

// 404 Error handler
app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

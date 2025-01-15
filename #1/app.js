const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require('./users')
const whatever = require('./whatever')

app.use(express.json())


app.use([users,whatever]);

// app.get(users);

app.use('/users', function(req,res,next) {
    res.send('user prof')
});


app.use('/whatever', function(req,res,next) {
    res.send('whatever bruv')
});

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
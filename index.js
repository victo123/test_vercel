const express = require('express');
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));





import express from 'express';

const host = "localhost";
const port = 8000;
const app=express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/',require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
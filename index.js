const express = require('express');
const cors = require("cors");
const https = require('https');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ extended: false }),
       cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
       
       );



app.get('/', (req, res) => {
  res.status(200).json({ msg: "Hello World" });
})

app.get('/hello', (req, res) => {
  res.status(200).json({ msg: "route to /hello is ok" });
})

app.get('/test', (req, res) => {
  https.get('https://jsonplaceholder.typicode.com/users', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);
  
    res.on('data', chunk => {
      data.push(chunk);
    });
  
    res.on('end', () => {
      console.log('Response ended: ');
      const users = JSON.parse(Buffer.concat(data).toString());
  
      for(user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
})


app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));





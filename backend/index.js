//start index.js server 
 const express = require('express');
 const app = express();

 app.get('/', (req, res) => {
     res.send('Hello World!');
 });

    //use env file to set port
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Our project is running on port ${PORT}`);
    });
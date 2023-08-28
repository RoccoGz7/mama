const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
.then((resolve) => {
    console.log('The database is connect');
})
.catch((error) => {
    console.log(error);
})
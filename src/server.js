const express = require('express');
const app = express();
const buyerRoutes = require('./buyerRoutes');
const sellerRoutes = require('./sellerRoutes');

app.use(express.json());
app.use('/buyers', buyerRoutes);
app.use('/sellers', sellerRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
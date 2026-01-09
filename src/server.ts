import express from 'express';
import { categoriesRouter } from './routes/categories.js';
import { productsRouter } from './routes/products.js';
import { cartRouter } from './routes/cart.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
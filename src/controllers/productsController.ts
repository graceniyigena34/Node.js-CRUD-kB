// import { Request, Response } from 'express';
// import { Product } from '../models/Product.js';
// import { generateUUID } from '../utils/uuid.js';

// let products: Product[] = [];

// export const getProducts = (req: Request, res: Response) => {
//   res.json(products);
// };

// export const getProductById = (req: Request, res: Response) => {
//   const product = products.find(p => p.id === req.params.id);
//   if (!product) return res.status(404).json({ error: 'Product not found' });
//   res.json(product);
// };

// export const createProduct = (req: Request, res: Response) => {
//   const { name, price, description, categoryId, inStock, quantity } = req.body;
//   if (!name || price === undefined || !categoryId || inStock === undefined || quantity === undefined) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }
  
//   const product: Product = {
//     id: generateUUID(),
//     name,
//     price,
//     description,
//     categoryId,
//     inStock,
//     quantity
//   };
//   products.push(product);
//   res.status(201).json(product);
// };

// export const updateProduct = (req: Request, res: Response) => {
//   const index = products.findIndex(p => p.id === req.params.id);
//   if (index === -1) return res.status(404).json({ error: 'Product not found' });
  
//   const { name, price, description, categoryId, inStock, quantity } = req.body;
//   if (!name || price === undefined || !categoryId || inStock === undefined || quantity === undefined) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }
  
//   products[index] = { ...products[index], name, price, description, categoryId, inStock, quantity };
//   res.json(products[index]);
// };

// export const deleteProduct = (req: Request, res: Response) => {
//   const index = products.findIndex(p => p.id === req.params.id);
//   if (index === -1) return res.status(404).json({ error: 'Product not found' });
  
//   products.splice(index, 1);
//   res.status(204).send();
// };
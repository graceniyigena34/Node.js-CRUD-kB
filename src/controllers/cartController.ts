// import { Request, Response } from 'express';
// import { Cart, CartItem } from '../models/Cart.js';
// import { generateUUID } from '../utils/uuid.js';

// let carts: Cart[] = [];

// export const getCart = (req: Request, res: Response) => {
//   const cart = carts.find(c => c.userId === req.params.userId);
//   if (!cart) return res.json({ userId: req.params.userId, items: [] });
//   res.json(cart);
// };

// export const addCartItem = (req: Request, res: Response) => {
//   const { productId, quantity } = req.body;
//   if (!productId || quantity === undefined) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }
  
//   let cart = carts.find(c => c.userId === req.params.userId);
//   if (!cart) {
//     cart = { userId: req.params.userId, items: [] };
//     carts.push(cart);
//   }
  
//   const item: CartItem = {
//     id: generateUUID(),
//     productId,
//     quantity
//   };
//   cart.items.push(item);
//   res.status(201).json(item);
// };

// export const updateCartItem = (req: Request, res: Response) => {
//   const cart = carts.find(c => c.userId === req.params.userId);
//   if (!cart) return res.status(404).json({ error: 'Cart not found' });
  
//   const itemIndex = cart.items.findIndex(i => i.id === req.params.id);
//   if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });
  
//   const { quantity } = req.body;
//   if (quantity === undefined) return res.status(400).json({ error: 'Quantity is required' });
  
//   cart.items[itemIndex].quantity = quantity;
//   res.json(cart.items[itemIndex]);
// };

// export const deleteCartItem = (req: Request, res: Response) => {
//   const cart = carts.find(c => c.userId === req.params.userId);
//   if (!cart) return res.status(404).json({ error: 'Cart not found' });
  
//   const itemIndex = cart.items.findIndex(i => i.id === req.params.id);
//   if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });
  
//   cart.items.splice(itemIndex, 1);
//   res.status(204).send();
// };

// export const clearCart = (req: Request, res: Response) => {
//   const cartIndex = carts.findIndex(c => c.userId === req.params.userId);
//   if (cartIndex === -1) return res.status(404).json({ error: 'Cart not found' });
  
//   carts.splice(cartIndex, 1);
//   res.status(204).send();
// };
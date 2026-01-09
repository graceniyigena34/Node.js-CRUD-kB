import { Router } from 'express';
import { getCart, addCartItem, updateCartItem, deleteCartItem, clearCart } from '../controllers/cartController.js';

export const cartRouter = Router();

cartRouter.get('/:userId', getCart);
cartRouter.post('/:userId/items', addCartItem);
cartRouter.put('/:userId/items/:id', updateCartItem);
cartRouter.delete('/:userId/items/:id', deleteCartItem);
cartRouter.delete('/:userId', clearCart);
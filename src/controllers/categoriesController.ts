// import { Request, Response } from 'express';
// import { Category } from '../models/Category.js';
// import { generateUUID } from '../utils/uuid.js';

// let categories: Category[] = [];

// export const getCategories = (req: Request, res: Response) => {
//   res.json(categories);
// };

// export const getCategoryById = (req: Request, res: Response) => {
//   const category = categories.find(c => c.id === req.params.id);
//   if (!category) return res.status(404).json({ error: 'Category not found' });
//   res.json(category);
// };

// export const createCategory = (req: Request, res: Response) => {
//   const { name, description } = req.body;
//   if (!name) return res.status(400).json({ error: 'Name is required' });
  
//   const category: Category = {
//     id: generateUUID(),
//     name,
//     description
//   };
//   categories.push(category);
//   res.status(201).json(category);
// };

// export const updateCategory = (req: Request, res: Response) => {
//   const index = categories.findIndex(c => c.id === req.params.id);
//   if (index === -1) return res.status(404).json({ error: 'Category not found' });
  
//   const { name, description } = req.body;
//   if (!name) return res.status(400).json({ error: 'Name is required' });
  
//   categories[index] = { ...categories[index], name, description };
//   res.json(categories[index]);
// };

// export const deleteCategory = (req: Request, res: Response) => {
//   const index = categories.findIndex(c => c.id === req.params.id);
//   if (index === -1) return res.status(404).json({ error: 'Category not found' });
  
//   categories.splice(index, 1);
//   res.status(204).send();
// };
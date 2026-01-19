
import { MenuItem, Category } from './types';

export const RESTAURANT_NAME = "King Burger & Pizza";
export const RESTAURANT_PHONE = "+923054348080";
export const FOODPANDA_URL = "https://www.foodpanda.pk/restaurants/king-burger-pizza";
export const ADDRESS = "22-N Khayban-e-Amin, Block N, Khayaban-e-Ameen, Lahore";
export const HOURS = "Daily: 12 PM – 4 AM";

export const CATEGORIES: Category[] = [
  { id: 'Burgers', name: 'Burgers', icon: '🍔' },
  { id: 'Pizzas', name: 'Pizzas', icon: '🍕' },
  { id: 'Sides', name: 'Sides', icon: '🍟' },
  { id: 'Drinks', name: 'Drinks & Shakes', icon: '🥤' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'Classic Cheeseburger',
    price: 399,
    description: 'Juicy grilled beef patty with melted cheese, lettuce, and our secret sauce.',
    category: 'Burgers',
    image: 'https://picsum.photos/seed/burger1/400/300'
  },
  {
    id: 'b2',
    name: 'Double Beef Burger',
    price: 599,
    description: 'Two succulent beef patties layered with extra cheese and fresh pickles.',
    category: 'Burgers',
    image: 'https://picsum.photos/seed/burger2/400/300'
  },
  {
    id: 'b3',
    name: 'Chicken Zinger',
    price: 449,
    description: 'Crispy fried chicken breast fillet with spicy mayo and shredded lettuce.',
    category: 'Burgers',
    image: 'https://picsum.photos/seed/burger3/400/300'
  },
  // Pizzas
  {
    id: 'p1',
    name: 'Margherita',
    price: 699,
    description: 'Authentic tomato sauce, fresh mozzarella, and a drizzle of olive oil.',
    category: 'Pizzas',
    image: 'https://picsum.photos/seed/pizza1/400/300'
  },
  {
    id: 'p2',
    name: 'Pepperoni Feast',
    price: 899,
    description: 'Generous helpings of beef pepperoni and mozzarella on a crispy crust.',
    category: 'Pizzas',
    image: 'https://picsum.photos/seed/pizza2/400/300'
  },
  {
    id: 'p3',
    name: 'BBQ Chicken',
    price: 949,
    description: 'Smoky BBQ base with grilled chicken chunks, onions, and bell peppers.',
    category: 'Pizzas',
    image: 'https://picsum.photos/seed/pizza3/400/300'
  },
  // Sides
  {
    id: 's1',
    name: 'Loaded Fries',
    price: 349,
    description: 'Crispy chips topped with melted cheese, jalapenos, and grilled chicken bits.',
    category: 'Sides',
    image: 'https://picsum.photos/seed/fries1/400/300'
  },
  {
    id: 's2',
    name: 'Garlic Bread',
    price: 199,
    description: 'Freshly baked baguette slices infused with garlic butter and herbs.',
    category: 'Sides',
    image: 'https://picsum.photos/seed/garlic1/400/300'
  },
  {
    id: 's3',
    name: 'Onion Rings',
    price: 249,
    description: 'Golden-fried batter-dipped onion rings served with dip.',
    category: 'Sides',
    image: 'https://picsum.photos/seed/rings1/400/300'
  },
  // Drinks
  {
    id: 'd1',
    name: 'Vanilla Shake',
    price: 299,
    description: 'Creamy, thick vanilla bean milkshake topped with whipped cream.',
    category: 'Drinks',
    image: 'https://picsum.photos/seed/shake1/400/300'
  },
  {
    id: 'd2',
    name: 'Chocolate Shake',
    price: 299,
    description: 'Rich dark chocolate syrup blended with premium vanilla ice cream.',
    category: 'Drinks',
    image: 'https://picsum.photos/seed/shake2/400/300'
  },
  {
    id: 'd3',
    name: 'Soft Drinks',
    price: 120,
    description: 'Chilled 250ml cans (Coke, Sprite, Fanta).',
    category: 'Drinks',
    image: 'https://picsum.photos/seed/coke1/400/300'
  },
];


export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Burgers' | 'Pizzas' | 'Sides' | 'Drinks';
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

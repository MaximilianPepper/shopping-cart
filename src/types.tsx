type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "all";
export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  amount: number;
}

export type ProductItem = Omit<CartItem, "amount">;

interface FilterStoreType {
  search: string;
  category: Category;
}
export interface StateType {
  products: ProductItem[];
  filter: FilterStoreType;
  categories: Category[];
  cart: CartItem[];
}

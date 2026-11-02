export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // em centavos: 12990 = R$ 129,90
  category: string;
  image: string | null;
  stock: number;
};
export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface Bestseller {
  product: Product;
  revenue: number;
  units: number;
}

export interface SalesOverTime {
  orders: number;
  total: number;
}

interface Dashboard {
  bestsellers: Bestseller[];
  sales_over_time_week: SalesOverTime[];
  sales_over_time_year: SalesOverTime[];
}

export default Dashboard;

import Paginator from '@shared/interfaces/paginator.interface';
import Order from './order.interface';

interface OrderPaginator extends Paginator {
  orders: Order[];
}

export default OrderPaginator;

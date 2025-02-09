import { IProductionOrder } from '../models/production-order.model';
const productionOrders: IProductionOrder[] = [
    {
      id: 1,
      product_id: "P001",
      batch_number: "B001",
      start_time: "2025-02-07T08:00:00Z",
      end_time: "2025-02-07T12:00:00Z",
      status: "Scheduled"
    },
    {
      id: 2,
      product_id: "P002",
      batch_number: "B002",
      start_time: "2025-02-07T09:30:00Z",
      end_time: "2025-02-07T14:00:00Z",
      status: "In Progress"
    },
    {
      id: 3,
      product_id: "P003",
      batch_number: "B003",
      start_time: "2025-02-07T10:00:00Z",
      end_time: "2025-02-07T16:00:00Z",
      status: "Completed"
    }
  ];

export class ProductionOrderRepository {

  async find(): Promise<IProductionOrder[]> {
    return productionOrders;
  }

  async findById(id: number): Promise<IProductionOrder | undefined> {
    return productionOrders.find(order => order.id === id);
  }

  async create(order: IProductionOrder): Promise<IProductionOrder> {
    order.id = productionOrders.length + 1;
    productionOrders.push(order);
    return order;
  }

  
  async updateById(id: number, data: Partial<IProductionOrder>): Promise<boolean> {
    const index = productionOrders.findIndex(order => order.id === id);

    if (index !== -1) {
        productionOrders[index] = { ...productionOrders[index], ...data };
        return true;
    }
    return false;
    
}



  async deleteById(id: number): Promise<boolean> {
    const index = productionOrders.findIndex(order => order.id === id);
    if (index !== -1) {
      productionOrders.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default ProductionOrderRepository;


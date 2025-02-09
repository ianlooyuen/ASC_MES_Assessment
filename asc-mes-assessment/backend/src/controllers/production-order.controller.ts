import { get, post, put, del, param, requestBody } from '@loopback/rest';
import { ProductionOrderRepository } from '../repositories/production-order.repository';
import { IProductionOrder } from '../models/production-order.model';

export class ProductionOrderController {
  private productionOrderRepo: ProductionOrderRepository;

  constructor() {
    this.productionOrderRepo = new ProductionOrderRepository();
  }

  @get('/production-orders')
  async findAll(): Promise<IProductionOrder[]> {
    return this.productionOrderRepo.find();
  }

  @get('/production-orders/{id}')
  async findById(@param.path.number('id') id: number): Promise<IProductionOrder | undefined> {
    return this.productionOrderRepo.findById(id);
  }

  @post('/production-orders')
  async create(@requestBody() order: IProductionOrder): Promise<IProductionOrder> {
    console.log("received order:", order)
    return this.productionOrderRepo.create(order);
  }

  @put('/production-orders/{id}')
  async update(@param.path.number('id') id: number, @requestBody() order: Partial<IProductionOrder>): Promise<{ message: string }> {
    const success = await this.productionOrderRepo.updateById(id, order);
    return { message: success ? "Updated successfully" : "Update failed" };
  }

  @del('/production-orders/{id}')
  async delete(@param.path.number('id') id: number): Promise<{ message: string }> {
    const success = await this.productionOrderRepo.deleteById(id);
    return { message: success ? "Deleted successfully" : "Delete failed" };
  }
}

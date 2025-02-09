import { get, post, put, del, param, requestBody } from '@loopback/rest';
import { InspectionRecordRepository } from '../repositories/inspection-record.repository';
import { IInspectionRecord } from '../models/inspection-record.model';

export class InspectionRecordController {
  private inspectionRecordRepo: InspectionRecordRepository;

  constructor() {
    this.inspectionRecordRepo = new InspectionRecordRepository();
  }

  @get('/inspection-records')
  async findAll(): Promise<IInspectionRecord[]> {
    return this.inspectionRecordRepo.find();
  }

  @get('/inspection-records/{id}')
  async findById(@param.path.number('id') id: number): Promise<IInspectionRecord | undefined> {
    return this.inspectionRecordRepo.findById(id);
  }

  @post('/inspection-records')
  async create(@requestBody() order: IInspectionRecord): Promise<IInspectionRecord> {
    console.log("received order:", order)
    return this.inspectionRecordRepo.create(order);
  }

  @put('/inspection-records/{id}')
  async update(@param.path.number('id') id: number, @requestBody() order: Partial<IInspectionRecord>): Promise<{ message: string }> {
    const success = await this.inspectionRecordRepo.updateById(id, order);
    return { message: success ? "Updated successfully" : "Update failed" };
  }

  @del('/inspection-records/{id}')
  async delete(@param.path.number('id') id: number): Promise<{ message: string }> {
    const success = await this.inspectionRecordRepo.deleteById(id);
    return { message: success ? "Deleted successfully" : "Delete failed" };
  }
}
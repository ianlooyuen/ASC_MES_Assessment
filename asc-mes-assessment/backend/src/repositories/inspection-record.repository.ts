import { IInspectionRecord } from '../models/inspection-record.model';
const inspectionRecords: IInspectionRecord[] = [
    {
      id: 1,
      product_id: "P001",
      inspection_timestamp: "2025-01-07T08:00:00Z",
      inspector_id: "I001",
      inspection_result: "Passed"
    },
    {
        id: 2,
        product_id: "P002",
        inspection_timestamp: "2025-02-07T08:00:00Z",
        inspector_id: "I002",
        inspection_result: "Failed"
      },
      {
        id: 3,
        product_id: "P003",
        inspection_timestamp: "2025-03-07T08:00:00Z",
        inspector_id: "I003",
        inspection_result: "In Progress"
      }
  ];

export class InspectionRecordRepository {

  async find(): Promise<IInspectionRecord[]> {
    return inspectionRecords;
  }

  async findById(id: number): Promise<IInspectionRecord | undefined> {
    return inspectionRecords.find(order => order.id === id);
  }

  async create(order: IInspectionRecord): Promise<IInspectionRecord> {
    order.id = inspectionRecords.length + 1;
    inspectionRecords.push(order);
    return order;
  }

  
  async updateById(id: number, data: Partial<IInspectionRecord>): Promise<boolean> {
    const index = inspectionRecords.findIndex(order => order.id === id);
    if (index !== -1) {
        inspectionRecords[index] = { ...inspectionRecords[index], ...data };
        return true;
    }
    return false;
}

  async deleteById(id: number): Promise<boolean> {
    const index = inspectionRecords.findIndex(order => order.id === id);
    if (index !== -1) {
        inspectionRecords.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default InspectionRecordRepository;

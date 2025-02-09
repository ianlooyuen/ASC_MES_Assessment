export interface IProductionOrder {
  id?: number;
  product_id: string;
  batch_number: string;
  status?: string;
  start_time?: string;
  end_time?: string;
}

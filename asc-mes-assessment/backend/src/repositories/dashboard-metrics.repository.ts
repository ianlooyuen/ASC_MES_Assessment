import { IDashboardMetric } from '../models/dashboard-metrics.model';
const dashboardMetrics: IDashboardMetric = 
    {
      total_production: 1000,
      active_machines: 15,
      defect_rate: "3%"
    };

export class DashboardMetricsRepository {

  async find(): Promise<IDashboardMetric> {
    return dashboardMetrics;
  }
}

export default DashboardMetricsRepository;
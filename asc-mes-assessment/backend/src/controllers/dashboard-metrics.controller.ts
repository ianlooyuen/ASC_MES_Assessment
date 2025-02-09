import { get } from '@loopback/rest';
import { DashboardMetricsRepository } from '../repositories/dashboard-metrics.repository';
import { IDashboardMetric } from '../models/dashboard-metrics.model';

export class DashboardMetricsController {
    private dashboardMetricsRepo: DashboardMetricsRepository;

    constructor() {
        this.dashboardMetricsRepo = new DashboardMetricsRepository();
    }

    @get('/dashboard-metrics')
    async findAll(): Promise<IDashboardMetric> {
    return this.dashboardMetricsRepo.find();
    }
}

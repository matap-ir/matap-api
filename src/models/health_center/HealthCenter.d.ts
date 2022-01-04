import { HealthCenterType } from '../Enums';
export default class HealthCenter {
    _id: string;
    name: string;
    address: string;
    logoUrl?: string;
    wallpaperUrl?: string;
    type: HealthCenterType;
    percentage: number;
    priorities: string[];
    shaba: string;
    priority: number;
    constructor(name: string, address: string, type: HealthCenterType, percentage: number, priorities: string[], shaba: string, priority: number);
}

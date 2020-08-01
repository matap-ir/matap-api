import {HealthCenterType} from '../Enums';

export default interface HealthCenter{
    _id:string,
    name:string,
    address:string,
    logoUrl:string,
    wallpaperUrl: string,
    type: HealthCenterType,
    percentage: number,
    priorities:string[],
};

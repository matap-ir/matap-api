export default interface Receipt{
    _id:string,
    amount:number,
    type:'CHARGE_BY_GATEWAY' | 'CHARGE_BY_ADMIN' | 'STARTER_CHARGE' | 'VISIT_PAYMENT' | 'PAYROLL',
    issuer: string,
    tracking_code:string,
}

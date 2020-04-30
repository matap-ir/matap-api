export default interface Transaction{
    _id:string,
    amount:number,
    type:'CHARGE_BY_GATEWAY' | 'CHARGE_BY_ADMIN' | 'REDUCE_BY_ADMIN' | 'STARTER_CHARGE' | 'VISIT_PAYMENT' | 'PAYROLL',
    issuer:{
        type: 'admin' | 'user',
        _id:string,
        name:string
    },
    target:{
        _id:string,
        name:string
    },
    tracking_code:string,
    date:number,
    hint:string
}

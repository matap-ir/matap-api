export default interface Discount{
    _id:string,
    title: string,
    code: string,
    amount: number,
    end_date: number,
    per_user_limit: number,
    total_usage_limit: number,
    usages: [{userId:string,roomId:string}]
}

export default interface DiscountCoupon {
    _id: string;
    title: string;
    code: string;
    amount: number;
    start_date: number;
    end_date: number;
    per_user_limit: number;
    total_usage_limit: number;
    usages: string[];
}

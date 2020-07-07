export default interface ResponseTime{
    from: { hour:string, minute:string },
    to: { hour:string, minute:string },
    type: 'healthcenter' | 'self'
}


module.exports = (app : any) => {
    app.use((req : any, res: any, next: any) => {
        next();
        let a = res.statusCode;
    })
}
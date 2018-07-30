
module.exports = (app : any) => {
    app.use((req : any, res: any, next: any) => {
        next();
        if(res.statusCode == 404)
        {
            res.end("haha 404 ;)");
        };
    })
}
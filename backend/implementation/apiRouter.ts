
//all apis should be configured here
module.exports = (app : any) => {
    app.use(require('../api/loginApi'));
    app.use(require('../api/userApi'));
};
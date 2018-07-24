
//all apis should be configured here
module.exports = (app : any) => {
    require('../api/loginApi')(app);
    require('../api/userApi')(app);
};

//all apis should be configured here
module.exports = (app) => {
    require('../api/loginApi')(app);
    require('../api/userApi')(app);
};
const conf = require("../service/configurationService");
const route = new conf().getConfiguration().apiRoute;
const mongoose = require('mongoose');

module.exports = (app) => {
    app.get(route + '/user', async (req, res) => {
        try {
            //let db = await mongoose.connect('mongodb://root:password@localhost:27017/tracker');
            await mongoose.connect('mongodb://localhost:8585/tracker');
            const Cat = mongoose.model('Cat', { name: String });
            const kitty = new Cat({ name: 'Zildjian' });
            await kitty.save();
        }
        catch (e) {
            debugger;
        }
    });
}

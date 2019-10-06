const User = require('../models/User');

// métodos padrões do MVC: index, show, store, update, destroy;

module.exports = {
    async store(request, response){
        const { email } = request.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }


        return response.json(user);
    }
}
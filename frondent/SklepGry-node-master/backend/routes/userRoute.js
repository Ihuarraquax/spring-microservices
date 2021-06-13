import express from 'express';
import User from '../models/userModel';
import {getToken, isAuth} from '../util';

const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: getToken(updatedUser)
        });
    } else {
        res.status(404).send({msg: 'Użytkownik nieznaleziony'});
    }

});

router.post('/signin', async (req, res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        });

    } else {
        res.status(401).send({msg: 'Zły email bądź hasło.'});
    }

});

router.post('/sigin', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({msg: 'Dane nieprawidłowe.'});
    }

})

const users = require('../seed/users')
//console.log(products);
User.findOne({}, function (err, doc) {
    if (!doc) {
        User.insertMany(users);
        console.log("INIT USEROW")
    } else {
        console.log("Baza userow już jest, nie trzeba initować");
    }
});

export default router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Check db for user with given credentials
router.post('/check', (req, res, next) => {
    const username = req.body.username;
    
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if(!user){
            return res.json({success: true, msg:'Username is available.'});
        } else {
            return res.json({success: false, msg:'Username is already taken.'});
        };
    });
});   

//Register
router.post('/register', (req, res, next) => {
    const userRole = "_USER_";
    
    let newUser = new User(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            role: userRole
        }
        );

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({
                    success: false,
                    message: 'failed to register user'
                });
        }else{
            res.json({
                    success: true,
                    message: 'user has been registered',
                });    
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found.'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    }
                }); 
            } else {
                return res.json({success: false, msg:'The password you have entered is incorrect.'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user:req.user});
});

//Validate
router.get('/validate', (req, res, next) => {
    res.send('validate');
});

//Authorize



router.post('/authorize', (req, res, next) => {
    const username = req.body.username;
    
    User.getUserRoleByUsername(username, (err, user) => {
        if (err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found.'});
        }else{ 
            res.json({
                success: true,
                user_role: user.role
                });
        }
    });
});

module.exports = router;
// ^^^  If you see server Error  --unexpected end of input-- at the line above, make sure that all brackets /parentheses in any recent code are closed. 
    
        
        
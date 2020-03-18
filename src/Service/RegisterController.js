import bcrypt from 'bcrypt';
import config from "config";
import UserModel from '../Model/UserModel';



export const register = (req , res)=>{
    console.log("helloo");
    const newUser = new UserModel(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password  , 10);
    console.log(newUser.hashPassword);
    newUser.save((err , user)=>{
        if(err){
            return res.status(400).send({
                message: err
            })
        } else {
            user.hashPassword = undefined;
            res.json(user);
        }
    })
}
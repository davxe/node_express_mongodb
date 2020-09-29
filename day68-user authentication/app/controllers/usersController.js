const User=require('../models/user')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const usersController={}

usersController.register=(req,res)=>{
    const body=req.body
    const user=new User(body)
    bcryptjs.genSalt()
        .then((salt)=>{
            console.log("salt",salt)
            bcryptjs.hash(user.password,salt)
                .then((encrypted)=>{
                    console.log("encrypted",encrypted)
                    console.log("password",user.password)
                    user.password=encrypted
                    console.log("after encrypted",user.password)
                    user.save()
                        .then((user)=>{
                            res.json(user)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
        })

}

usersController.login=(req,res)=>{
    const body=req.body
    User.findOne({email:body.email})
        .then((user)=>{
            if(!user)
            {
                res.json({notice:'invalid email or password'})
            }
            console.log("body",body.password,     "->>>>user",user.password)
            bcryptjs.compare(body.password,user.password)
            
                .then((match)=>{
                    console.log('match',match)
                    if(match)
                    {
                        const tokenData={
                            _id:user._id,
                            email:user.email,
                            username:user.username
                        }
                        const token=jwt.sign(tokenData,'dct123',{expiresIn:'2d'})
                        res.json({"token":`token ${token}`})
                    }
                    else
                    {
                        res.json({error:'invalid email or password'})
                    }
                })
        })
}

usersController.account=(req,res)=>{
    res.json(req.user)
}

module.exports=usersController
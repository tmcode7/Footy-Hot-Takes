const Takes = require('../models/takes')

module.exports = {

    getTakes: async (req,res)=>{
        try{
            const takesList = await Takes.find({userId:req.user.id})
            res.render('takes.ejs', {takeContent: takesList, likes: req.body.likes, dislikes: req.body.dislikes, user: req.user})
            console.log(req.user)
        }catch(err){
            console.log(err)
        }
    },

    

    addTake: async (req, res) => {
        try{
            await Takes.create({takeContent: req.body.hotTake,
                likes: 0, userId: req.user.id})
            console.log('Response Added')
            res.redirect('/takes')
        }catch(err){
            console.log(err)
        }    
    },

    deleteTake: async (req, res)=>{
        console.log(req.body.takeIdFromJSFile)
        try{
            await Takes.findOneAndDelete({_id:req.body.takeIdFromJSFile})
            console.log('Deleted Take')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },

    likeTake: async (req, res)=>{
        console.log(req.body.takeIdFromJSFile)
        try{
            await Takes.findOneAndUpdate( {_id:req.body.takeIdFromJSFile},{
                
                    likes:req.body.takeIdFromJSFile += 1
                
            },)
            console.log('liked Take')
            res.json('liked It')
        }catch(err){
            console.log(err)
        }
    },


   
    dislikeTake: async (req, res)=>{
        console.log(req.body.takeIdFromJSFile)
        try{
            await Takes.findOneAndUpdate({dislikes:req.body.dislikesS}, {
                $set: {
                    dislikes:request.body.dislikesS + 1
                  }
            })
            console.log('Disliked Take')
            res.json('Disliked It')
        }catch(err){
            console.log(err)
        }
    },

    

}
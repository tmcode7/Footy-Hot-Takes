const Takes = require('../models/takes')

module.exports = {

    getTakes: async (req,res)=>{
        try{
            const takesList = await Takes.find()
            const likesCount = await Takes.find({likes: req.body.likes})
            res.render('takes.ejs', {takeContent: takesList, likes: likesCount})
        }catch(err){
            console.log(err)
        }
    },

    

    addTake: async (req, res) => {
        try{
            await Takes.create({takeContent: req.body.hotTake,
                likes: 0})
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
    }

    

}
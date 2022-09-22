const takes = require('../models/takes')

module.exports = {
    getTakes: (req,res)=>{
        res.render('takes.ejs')
    },

    createTakes: async (req, res)=>{
        try{
            await takes.create({takes: req.body.todoItem, completed: false})
            console.log('Take has been added!')
            res.redirect('/takes')
        }catch(err){
            console.log(err)
        }
    }
}
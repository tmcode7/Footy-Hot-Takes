const takes = require('../models/takes')

module.exports = {
    /*
    getTakes: async (req,res)=>{
        try{
            res.render('takes.ejs', {info: req.body.hotTake,
                likes: 0})
        }catch(err){
            console.log(err)
        }
    },
    */

    getTakes: async (req,res)=>{
        try{
            const takesList = await takes.find()
            res.render('takes.ejs', {info: takesList,
                likes: 0})
        }catch(err){
            console.log(err)
        }
    },

    

    addTake: async (req, res) => {
        try{
            await takes.create({takeContent: req.body.hotTake,
                likes: 0})
            console.log('Response Added')
            res.redirect('/takes')
        }catch(err){
            console.log(err)
        }    
    },

    
    /*
   addOneLike: (req, res) => {
        db.collection('takes').updateOne({takeContent: req.body.hotTake, likes: req.body.likesS},{
            $set: {
                likes:request.body.likesS + 1
              }
        },{
            sort: {_id: -1},
            upsert: true
        })
        .then(result => {
            console.log('Added One Like')
            response.json('Like Added')
        })
        .catch(error => console.error(error))
    
    } 
    */
}
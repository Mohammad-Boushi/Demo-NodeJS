const {Feed} = require('../models/FEED')

const home = (req, res) => {
    res.redirect('/feed')
}
homePage = (req,res )=>{
    if(req.method === 'GET'){
        Feed.find()
        .then((response)=> res.render('homePage',{data:response, box:'', link:'/feed', error:''}))
        .catch((err)=> {
        console.log(err.errors)
        })
        
    }else{
        const feed = new Feed(req.body)
        feed.save()
        .then(()=> res.redirect('/feed'))
        .catch((err)=> {
            res.render('homePage', {data:{}, link: "/feed", error:err.errors, box:''})
        })
    }
}



showPage =(req,res)=>{
    Feed.findById(req.params.id)
        .then((response)=> res.render('showPage',{data:response}))
        .catch((err)=> {
            console.log(err)
            })
}

const deleteElement = (req,res)=>{
    Feed.findByIdAndDelete(req.params.id)
    .then((response)=> res.redirect('/feed'))
    .catch((err)=> {
        console.log(err.errors)
        })
        }  


const showElement = (req,res)=>{
   Feed.findById(req.params.id)
   .then((result) => res.render('update', {link:`/update/${result._id}`,box:result, error:''}))
   .catch(err => console.log(err))
       
}

const updateElement = (req,res)=>{
    Feed.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.redirect(`/feed/${result.id}`))
        .catch(err => console.log(err))
    }


                

    module.exports =  {
        home,
        homePage,
        showPage,
        deleteElement,
        showElement,
        updateElement
    }
const express=require('express');
const router=express.Router();
const Html=require('./html.json')
const Css=require('./css.json')
const React=require('./react.json')


router.get('/html',(req,res)=>{
    res.json(Html);
});

router.get('/react',(req,res)=>{
    res.json(React);
});

router.get('/css',(req,res)=>{
    res.json(Css);
});




module.exports=router;
// import superheroes from 'superheroes';

// var name = superheroes.random();
// console.log(`i am a ${name}`);
import express from 'express';

const app=express();
var port=3000

app.get("/",(req,res)=>{
  res.send("hello nigga")
})

app.get( "/about" , ( req , res )=> {
  let aboutText = `About me page`
  console.log(aboutText);
  res.send(aboutText) ;
})

app.patch( '/about/update' , ( req , res ) =>{
    res.sendStatus(404);
});

app.post( '/add' , ( req , res )=>{
  res.sendStatus(200);
});


app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})
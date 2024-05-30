const express=require("express");
// const { nanoid } = require("nanoid");
const app=express()
const URl= require('./models/url')
const {connectTomongodb}=require("./connect")
const urlRoute=require("./routes/url")
const PORT=8001
connectTomongodb('mongodb://localhost:27017/short-url').then(()=>
    console.log("DB Connected")
)
app.get('/:shortId',async(req,res)=>{
   const shortId=req.params.shortId;
   const entry=await URL.findOneandUpdate(
    {
        shortId,
    },
    {
        $push:{
            visitHistory:
            {
                timestamp: Date.now(),
               
            }
        }
    }
   );
   res.redirect(entry.redirectURL);
});
app.use(express.json())// to parse body
app.use("/url",urlRoute)
app.listen(PORT,()=>
{
    console.log("Server Connected")
})
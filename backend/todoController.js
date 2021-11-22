const works = require('./work')

//adding a work /api/v1/addwork

exports.addwork = async (req,res)=>{

    try
    {
        const wk = req.body.work;
        console.log(req.body.work);
        const wk1 = await works.create({
            name:wk
        })
        console.log('Hello');
        return res.status(200).json({
            works: wk1
        })   
    }
    catch(err)
    {
        console.log(err);
    }
   
}
exports.getWork = async (req,res)=>{

    try{
        const allwork = await works.find();
        console.log(allwork);
        res.status(200).json({
            works:allwork
        })
    }
    catch(err){
        console.log(err);
    }
}
exports.deleteWork  = async (req,res)=>{

    try{
        const task = await works.findById(req.params.id);
        if(!task)
        {
            return res.status(404).json({
                success: false,
                message:"Tasks not found"
            })
        }
        await works.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            success: true,
            message:"Task deleted Successfully"
        })
    }
    catch(err)
    {
        return res.status(404).json({
            success: false,
            message:err
        })
    }
}
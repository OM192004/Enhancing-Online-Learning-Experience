const Badge=require("../models/Badge");

const createBadge=async (req,res)=>{

    try {
        const {
        name,
        description,
        icon,
        criteria
    }=req.body;

    const badge=new Badge({
        name,
        description,
        icon,
        criteria
    });

    await badge.save();
    res.status(200).json({
        success:true,
        message:"Badge created successfully",
        badge
    });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Badge not created",
            error:error.message
        });
        
    }
}


module.exports={createBadge};
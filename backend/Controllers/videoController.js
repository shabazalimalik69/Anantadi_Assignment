const Video = require("../Models/videoModel");


const uploadVideo = async(req,res)=>{
   const {name} = req.body;
   let videosPaths = [];
   if(Array.isArray(req.files.videos) && req.files.videos.length>0){
    for(let video of req.files.videos){
        videosPaths.push("/" + video.path);
    }
   }
   try{
     const uploadedVideos = await Video.create({
        name,
        videos : videosPaths,
     });
     return res.status(200).send({message:"Successfully Uploaded",uploadedVideos})
   }catch(error){
    res.status(500).send(error)
   }
};

const getVideo = async(req,res)=>{
    try {
        const getVideo = await Video.find({});
        return res.status(200).send(getVideo)
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {uploadVideo,getVideo}

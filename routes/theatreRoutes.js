const router = require("express").Router();
const Theatre = require("../models/theatreModel");
const mongoose = require('mongoose');

//Add a theatre
router.post("/add-theatre", async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success : true,
            message : "New Theatre added successfully"
        })
    }
    catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})

//update a theatre
router.put("/update-theatre", async (req, res) => {
    try{
      await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        res.send({
            success : true,
            message : "Theatre has been updated!"
        })
    }
    catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})
    //delete theatre
router.put("/delete-theatre", async (req, res) => {
    try{
      await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success : true,
            message : "Theatre has been deleted!"
        })
    }
    catch(error){
        res.send({
            success : false,
            message : error.message
        })
    }
})

//Get all theatres for Admin route
router.get("/get-all-theatres", async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success : true,
            message : 'All Theatres fetched! successfully',
            data : allTheatres
        });
    } catch(error){
        res.send({
            success : false,
            message : error.message
        });
    }
});

//Get all theatres for a specific owner
router.post('/get-all-theatres-by-owner', async (req, res) => {
    try{
        const allTheatres = await Theatre.find(req.body);
        //console.log(allTheatres);
        res.send({
            success : true,
            message : 'All Theatres fetched successfully',
            data : allTheatres
    })
}
    catch(error){
        res.send({
            success : false,
            message : error.message
        });
    }});

    module.exports = router;
const VehicleModel = require("../models/vehicleModel");

//Vehicle Plate Validation Patterns
var modernPlate = /^(([A-Z|a-z]{2,3}[ -])?[A-Z|a-z]{2,3}[ -]\d{4})/gim;
var oldPlate = /^(\d{2,3}[ -]\d{4})/gim;
var vintagePlate = /^(\d{2}[ -]sri[ -]\d{4})/gim;

// Get Vehicle Plate Type - ** TASK 01 **
const getLicensePlateType = function(req, res){

    let newVehicle = new VehicleModel(req.body);
    const plateNo = newVehicle.vehicleNumber;

    let isModern = modernPlate.test(plateNo);
    let isOld = oldPlate.test(plateNo);
    let isVintage = vintagePlate.test(plateNo);

    if (isModern) {
        return res.status(200).json({
            success:true,
            type: "Modern"
        });
        
    } else if (isOld) {
        return res.status(200).json({
            success:true,
            type: "Old"
        });
    } else if (isVintage) {
        return res.status(200).json({
            success:true,
            type: "Vintage"
        });
    } else {
        return res.status(200).json({
            success:false,
            type: "Invalid"
        });
    }
}


// Validate Vehicle Plate ** TASK 02 **
const validateLicensePlateNo = function(req, res){
    let newVehicle = new VehicleModel(req.body);
    const plateNo = newVehicle.vehicleNumber;

    let isModern = modernPlate.test(plateNo);
    let isOld = oldPlate.test(plateNo);
    let isVintage = vintagePlate.test(plateNo);

    if (isModern || isOld || isVintage) 
        return true;
    else 
        return false;
}

// Basic CRUD Operations - ** TASK 03 **
// Save Vehicle
const save_vehicle = function (req, res){
    let newVehicle = new VehicleModel(req.body);

    newVehicle.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true
        });
    });
}

// GetAll Vehicles
const getAll_vehicles = function (req, res){
    VehicleModel.find().exec((err, exsitingVehicle) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingVehicle,
        });
      });
}

// Get Vehicle By ID
const get_vehicle = function (req, res){
    let vehicleID = req.params.id;

    VehicleModel.findById(vehicleID,(err,exsitingVehicle)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingVehicle
        });
    });
}

// Update Vehicle
const update_vehicle = function (req, res){
    VehicleModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,vehicle)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Vehicle
const delete_vehicle = function (req, res){
    VehicleModel.findByIdAndRemove(req.params.id).exec((err,deletedVehicle)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedVehicle
        });

    });
}

module.exports = {getLicensePlateType, validateLicensePlateNo, save_vehicle, getAll_vehicles, get_vehicle, update_vehicle, delete_vehicle};
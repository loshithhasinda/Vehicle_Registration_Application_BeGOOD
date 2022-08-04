const express = require('express');
const VehicleRouter = express.Router();
const VehicleController = require('../controllers/vehicleController');

// Get Vehicle Plate Type
VehicleRouter.post('/vehicleType/get', VehicleController.getLicensePlateType);

// Save Vehicle
VehicleRouter.post('/vehicle/add', VehicleController.save_vehicle);

// GetAll Vehicles
VehicleRouter.get('/vehicle/getAll', VehicleController.getAll_vehicles);

// Get Vechile By ID
VehicleRouter.get('/vehicle/get/:id', VehicleController.get_vehicle);

// Update Vehicle
VehicleRouter.put('/vehicle/update/:id', VehicleController.update_vehicle);

// Delete Vechile
VehicleRouter.delete('/vehicle/delete/:id', VehicleController.delete_vehicle);

module.exports = VehicleRouter;
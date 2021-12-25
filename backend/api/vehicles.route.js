import express from "express"
import VehiclesCtrl from "./vehicles.controller.js"

const router = express.Router()

router.route("/api/v1/vehicles/").get(VehiclesCtrl.apiGetVehicles)

export default router

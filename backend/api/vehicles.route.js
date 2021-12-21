import express from "express"

const router = express.Router()

router.route("/api/v1/vehicles/").get((req, res) => res.send("Hello World!"))

export default router

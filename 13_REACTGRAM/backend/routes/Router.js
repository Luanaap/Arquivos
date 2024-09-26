const express = require("express");
const router = express();

router.use("/api/users", require("../routes/UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

module.exports = router;
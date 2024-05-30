// const express = require("express");
// const router = express.Router();
// const { handleGenerateNewShortUrl } = require("../controllers/url");

// // Define a POST route at the root path ("/") that is handled by handleGenerateNewShortUrl
// router.post("/", handleGenerateNewShortUrl);

// module.exports = router;\handleGenerateNewShortUrl
const express = require("express");
const { handleGenerateNewShortUrl,handlegetAnaylitics } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:shortId",handlegetAnaylitics)

module.exports = router;


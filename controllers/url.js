// const express=require(express)

const URL = require("../models/url");
// const { nanoid } = require("nanoid");
function generateRandomString() {
  const length = 8;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}
async function handlegetAnaylitics(req, res) {
  const shortId=req.params.shortId;
  const result=await URL.findOne({shortId});
  return res.json({
    totalClicks:result.visitHistory.length,
    analytics:result.visitHistory,
  })

}
async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  const sid = generateRandomString();
  if (!body.url) return res.status(400).json({ error: "please enter url" });
  await URL.create({
    shortId: sid,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}
module.exports = {
  handleGenerateNewShortUrl,
  handlegetAnaylitics,
};

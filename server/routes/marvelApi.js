const express = require('express');
const router = express.Router();
const MarvelApi = require("../axios/MarvelApi")

router.get('/:type', async (req, res) => {
  const { type } = req.params
  try {
    const response = await MarvelApi.getList(req.query, type)
    res.status(200).send(response)
  } catch (e) {
    console.log(e)
    res.status(e.status).send(e.data)
  }
});

module.exports = router;

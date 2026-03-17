const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/user/:userId", (req, res) => {

  const userId = req.params.userId;

  const sql = "SELECT * FROM playlists WHERE user_id=?";

  db.query(sql, [userId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

module.exports = router;
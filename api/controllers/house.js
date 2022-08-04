const express = require("express");
const router = express.Router();
const { get } = require("../models/houses");

/**
 * @swagger
 *
 * /houses/{id}:
 *   get:
 *     summary: Gets a house with a given ID
 *     tags: [Houses]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The house with the given ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/House"
 *       "404":
 *         description: The house was not found in the database.
 */

router.route("/:id").get(async (req, res) => {
  const house = await get(req.params.id);
  if (!house) {
    res.status(404);
    res.end();

    return;
  }

  res.status(200);
  res.json(house);
  res.end();
});

module.exports = router;

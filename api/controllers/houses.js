const express = require("express");
const router = express.Router();
const { getAll, create } = require("../models/houses");

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: All the CRUD operations you can do with the Houses
 * components:
 *   schemas:
 *     House:
 *       type: object
 *       required:
 *         - colors
 *         - colors1
 *         - founder
 *         - headOfHouse
 *         - houseGhost
 *         - mascot
 *         - name
 *         - values
 *         - values1
 *         - values2
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated ID of the house.
 *         colors:
 *           type: string
 *           description: The title of the house.
 *         colors1:
 *           type: string
 *           description: The body of the house.
 *         founder:
 *           type: string
 *           description: The body of the house.
 *         headOfHouse:
 *           type: string
 *           description: The body of the house.
 *         houseGhost:
 *           type: string
 *           description: The body of the house.
 *         mascot:
 *           type: string
 *           description: The body of the house.
 *         name:
 *           type: string
 *           description: The body of the house.
 *         school:
 *           type: string
 *           description: The body of the house.
 *         values:
 *           type: string
 *           description: The body of the house.
 *         values1:
 *           type: string
 *           description: The body of the house.
 *         values2:
 *           type: string
 *           description: The body of the house.
 */

/**
 * @swagger
 *
 * /houses:
 *   get:
 *     summary: Gets a list of houses
 *     tags: [houses]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: The list of houses.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/House"
 */

router
  .route("/")
  .get(async (req, res) => {
    const houses = await getAll();

    res.status(200);
    res.json(houses);
    res.end();
  })

module.exports = router;

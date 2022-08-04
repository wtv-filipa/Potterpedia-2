const express = require("express");
const router = express.Router();
const { get, create } = require("../models/favorites");
const checkJwt = require("../utils/checkJwt");

/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: All the CRUD operations you can do with favorites
 * components:
 *   schemas:
 *     NewFavorite:
 *       type: object
 *       required:
 *         - userId
 *         - nameCharacter
 *       properties:
 *         userId:
 *           type: string
 *           description: The id of the user that created the favorite.
 *         nameCharacter:
 *           type: string
 *           description: The name of the character favorited.
 *     Favorite:
 *       type: object
 *       required:
 *         - userId
 *         - nameCharacter
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated ID of the comment.
 *         userId:
 *           type: string
 *           description: The id of the user that created the favorite.
 *         nameCharacter:
 *           type: string
 *           description: The name of the character favorited.
 */

/**
 * @swagger
 *
 * /favorites:
 *   get:
 *     summary: Gets a list of favorites
 *     tags: [Favorites]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: The list of favorites.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Favorite"
 *   post:
 *     summary: Creates a new favorite
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewFavorite"
 *     responses:
 *       "201":
 *         description: The favorite was created correctly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Favorite"
 *       "400":
 *         description: The request was sent with an invalid body.
 */

router.route("/").post(checkJwt, async (req, res) => {
  const userId = req.user.sub;
  const nameCharacter = req.body.nameCharacter;

  const fav = await get(userId, nameCharacter);
  if (fav) {
    res.status(200);
    res.end();

    return;
  }

  const check = await create({ nameCharacter, userId });

  res.json(check);
  res.status(201);
  res.end();
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { get, remove } = require("../models/favorites");
const checkJwt = require("../utils/checkJwt");

/**
 * @swagger
 *
 * /favorites/{id}:
 *   get:
 *     summary: Gets a favorite with a given ID
 *     tags: [Favorites]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The favorite with the given ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Favorite"
 *       "404":
 *         description: The favorite was not found in the database.
 *   delete:
 *     summary: Deletes a favorite with a given ID
 *     tags: [Favorites]
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The favorite with the given ID was deleted correctly.
 */

router
  .route("/:id")
  .get(checkJwt, async (req, res) => {
    const userId = req.user.sub;
    const fav = await get(userId, req.params.id);
    if (!fav) {
      res.status(404);
      res.end();

      return;
    }

    res.status(200);
    res.json(fav);
    res.end();
  })
  .delete(checkJwt, async (req, res) => {
    const userId = req.user.sub;
    await remove(userId, req.params.id);

    res.status(200);
    res.end();
  });

module.exports = router;

const express = require("express");
const router = express.Router();
const { get, update, remove } = require("../models/comments");
const ForumSchema = require('../utils/ForumSchema');
const checkJwt = require("../utils/checkJwt");


/**
 * @swagger
 *
 * /comments/{id}:
 *   put:
 *     summary: Updates a comment with a given ID
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Comment"
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The comment with the given ID was updated correctly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Comment"
 *       "400":
 *         description: The request was sent with an invalid body.
 *   delete:
 *     summary: Deletes a comment with a given ID
 *     tags: [Comments]
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The comment with the given ID was deleted correctly.
 */

router.route("/:id")
  .put(checkJwt, async (req, res) => {
    try {
      await ForumSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }

    const comment = await update(req.params.id, req.body);

    res.json(comment);
    res.status(200);
    res.end();
  })
  .delete(checkJwt, async (req, res) => {
    await remove(req.params.id);

    res.status(200);
    res.end();
  })

module.exports = router;

const express = require("express");
const router = express.Router();
const { get, update, remove } = require("../models/spells");
const SpellsSchema = require("../utils/SpellsSchema");
const checkJwt = require("../utils/checkJwt");

/**
 * @swagger
 *
 * /spells/{id}:
 *   put:
 *     summary: Updates a spell with a given ID
 *     tags: [Spells]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Spell"
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The spell with the given ID was updated correctly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Spell"
 *       "400":
 *         description: The request was sent with an invalid body.
 *   delete:
 *     summary: Deletes a spell with a given ID
 *     tags: [Spell]
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: The spell with the given ID was deleted correctly.
 */

router
  .route("/:id")
  .put(checkJwt, async (req, res) => {
    try {
      await SpellsSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }
    await update(req.params.id, req.body);

    res.json({ id: req.params.id, ...req.body });
    res.status(200);
    res.end();
  })
  .delete(checkJwt, async (req, res) => {
    await remove(req.params.id);

    res.status(200);
    res.end();
  });

module.exports = router;

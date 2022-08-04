const express = require("express");
const router = express.Router();
const { getAll, create } = require("../models/spells");
const SpellsSchema = require("../utils/SpellsSchema");
const checkJwt = require("../utils/checkJwt");

/**
 * @swagger
 * tags:
 *   name: Spells
 *   description: All the CRUD operations you can do with the Spells
 * components:
 *   schemas:
 *     NewSpell:
 *       type: object
 *       required:
 *         - effect
 *         - spell
 *         - type
 *       properties:
 *         effect:
 *           type: string
 *           description: The effect of the spell.
 *         spell:
 *           type: string
 *           description: The name of the spell.
 *         type:
 *           type: string
 *           description: The type of spell.
 *     Spell:
 *       type: object
 *       required:
 *         - effect
 *         - spell
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated ID of the spell.
 *         effect:
 *           type: string
 *           description: The title of the spell.
 *         spell:
 *           type: string
 *           description: The body of the spell.
 *         type:
 *           type: string
 *           description: The body of the spell.
 */

/**
 * @swagger
 *
 * /spells:
 *   get:
 *     summary: Gets a list of spells
 *     tags: [spells]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: The list of spells.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Spell"
 *   post:
 *     summary: Creates a spell
 *     tags: [Spells]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewSpell"
 *     responses:
 *       "201":
 *         description: The spell was created correctly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Spell"
 *       "400":
 *         description: The request was sent with an invalid body.
 */

router
  .route("/")
  .get(async (req, res) => {
    const spells = await getAll();

    res.status(200);
    res.json(spells);
    res.end();
  })
  .post(checkJwt, async (req, res) => {
    try {
      await SpellsSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }
    const spell = await create(req.body);

    res.json(spell);
    res.status(201);
    res.end();
  });

module.exports = router;

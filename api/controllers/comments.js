const express = require("express");
const router = express.Router();
const { getAll, create } = require("../models/comments");
const ForumSchema = require("../utils/ForumSchema");
const checkJwt = require("../utils/checkJwt");

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: All the CRUD operations you can do with the comments
 * components:
 *   schemas:
 *     NewComment:
 *       type: object
 *       required:
 *         - body
 *       properties:
 *         body:
 *           type: string
 *           description: The body of the comment.
 *     Comment:
 *       type: object
 *       required:
 *         - body
 *         - timestamp
 *         - userId
 *         - userImage
 *         - userName
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated ID of the comment.
 *         body:
 *           type: string
 *           description: The body of the comment.
 *         timestamp:
 *           type: number
 *           description: The date of the comment.
 *         userId:
 *           type: string
 *           description: The user id that published the comment.
 *         userImage:
 *           type: string
 *           description: The image of the user that published the comment.
 *         userName:
 *           type: string
 *           description: The nickname of the user that published the comment.
 */

/**
 * @swagger
 *
 * /comments:
 *   get:
 *     summary: Gets a list of comments
 *     tags: [Comments]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: The list of comments.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Comment"
 *   post:
 *     summary: Creates a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewComment"
 *     responses:
 *       "201":
 *         description: The comment was created correctly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Comment"
 *       "400":
 *         description: The request was sent with an invalid body.
 */

router
  .route("/")
  .get(async (req, res) => {
    const comments = await getAll();

    res.status(200);
    res.json(comments);
    res.end();
  })
  .post(checkJwt, async (req, res) => {
    try {
      await ForumSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }

    const comment = await create({
      ...req.body,
      userName: req.user['http://info'].nickname,
      userImage: req.user['http://info'].picture,
      userId : req.user['http://info'].user_id
    });

    res.json(comment);
    res.status(201);
    res.end();
  });

module.exports = router;

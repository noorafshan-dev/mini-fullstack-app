const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/situation.controller");


/**
 * @swagger
 * /situation:
 *   get:
 *     summary: Get all situations
 *     responses:
 *       200:
 *         description: List of situations
 */
router.get("/", ctrl.getAll);

/**
 * @swagger
 * /situation/{id}:
 *   get:
 *     summary: Get a situation by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Single situation
 */
router.get("/:id", ctrl.getOne);

/**
 * @swagger
 * /situation:
 *   post:
 *     summary: Create a new situation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               col1:
 *                 type: string
 *               col2:
 *                 type: string
 *     responses:
 *       200:
 *         description: Created
 */
router.post("/", ctrl.create);

/**
 * @swagger
 * /situation/{id}:
 *   put:
 *     summary: Update a situation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               col1:
 *                 type: string
 *               col2:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", ctrl.update);

/**
 * @swagger
 * /situation/{id}:
 *   delete:
 *     summary: Delete a situation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/:id", ctrl.remove);



router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getOne);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
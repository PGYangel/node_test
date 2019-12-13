const express=require('express');
const router=express.Router();

/**
 * @swagger
 * definition:
 *   RouterGet:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * definition:
 *   RouterPost:
 *     properties:
 *       id:
 *         type: string
 */
router.get('/',(req,res)=>{
    res.send('<h1>首页</h1>');
});

/**
 * @swagger
 * /router1:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/RouterGet'
 */
router.get('/router1',(req,res)=>{
    res.send('<h1>get router1</h1>');
});

/**
 * @swagger
 * /router1:
 *   post:
 *     tags:
 *       - Puppies
 *     description: Creates a new puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
 *         description: RouterPost object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/RouterPost'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/router1',(req,res)=>{
    res.send('<h1>post router1</h1>');
});

router.get('/router2',(req,res)=>{
    res.send('<h1>get router2</h1>');
});
module.exports=router;

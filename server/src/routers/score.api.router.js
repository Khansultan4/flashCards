const router = require('express').Router();
const { Score, User, Theme } = require('../../db/models');


router
  .get('/', async (req, res) => {
    try {
      const allScores = await Score.findAll({include: [{model: User}, {model: Theme}]});
      res.json(allScores);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })


router
  .post('/', async (req, res) => {
    const {data} = req.body
    try {
      const score = await Score.create({rating: data.rating, userId: res.locals.user.id, themeId: data.themeId});
      res.json(score);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })



module.exports = router;
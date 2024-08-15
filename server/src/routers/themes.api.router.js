const router = require('express').Router();
const { Theme, Card } = require('../../db/models');


router
  .get('/', async (req, res) => {
    try {
      const allThemes = await Theme.findAll();
      res.json(allThemes);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })


router
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const theme = await Card.findAll({where: {theme_Id: id}, include: {model: Theme}});
      res.json(theme);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })



module.exports = router;
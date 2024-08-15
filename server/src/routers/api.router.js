const router = require('express').Router();
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');
const themesRouter = require('./themes.api.router');
const scoresRouter = require('./score.api.router')

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/themes', themesRouter);
router.use('/scores', scoresRouter);

module.exports = router;
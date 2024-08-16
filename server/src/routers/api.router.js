const router = require('express').Router();
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');
const scoreRouter = require('./score.api.router');
const themesRouter = require('./themes.api.router');

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/score', scoreRouter);
router.use('/themes', themesRouter);

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const { combineTableNames } = require('sequelize/types/utils');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comments', comment-routes);

module.exports = router;
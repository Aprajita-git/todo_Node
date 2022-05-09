const express = require('express');
const router = express.Router();

const { createTask, getAllTasks, updateTask, deleteTask, findOneTask } = require('../controllers/todoController');

router.post('/createTask',createTask);
router.get('/fetchAllTasks',getAllTasks);
router.put('/editTask/:id',updateTask);
router.delete('/deleteTask/:id',deleteTask);
router.get('/findTaskByTitle',findOneTask);

module.exports = router;
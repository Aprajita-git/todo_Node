const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

exports.createTask = asyncHandler(async (req, res) => {
    try {
        const { title, description, media, targetDate, status } = req.body;
        const todo = await Todo.create({title, description, media, targetDate, status});
        res.status(201).json({
            success: true,
            data: todo,
            message: 'Task is created successfully!!!'
        });
    } catch (error) {
       res.json({
           success: false,
           message: error.message
       });
    }
});

exports.updateTask = asyncHandler(async (req, res) => {
    try {
        const { title, description, media, targetDate, status } = req.body;
        const todo = await Todo.findOne({_id:req.params.id});
        if(todo){
            todo.title = title
            todo.description = description
            todo.media = media
            todo.targetDate = targetDate
            todo.status = status
            res.status(201).json({
                success: true,
                data: todo,
                message: 'Task is Updated successfully!!!'
            });
        }else{
            res.status(404).json({
                success: false,
                message: `Task is not existed by this id : ${req.params.id}`
            });
        }
    } catch (error) {
       res.json({
           success: false,
           message: error.message
       });
    }
});

exports.deleteTask = asyncHandler(async (req, res) => {
    try {
        const todo = await Todo.findOne({_id:req.params.id});
        if(todo){
            res.status(201).json({
                success: true,
                data: todo,
                message: 'Task is deleted successfully!!!'
            });
        }else{
            res.status(404).json({
                success: false,
                message: `Task is not existed by this id : ${req.params.id}`
            });
        }
    } catch (error) {
       res.json({
           success: false,
           message: error.message
       });
    }
});

exports.findOneTask = asyncHandler(async (req, res) => {
    try {
        const { title } = req.body
        const todo = await Todo.findOne({title:title});
        if(todo){
            res.status(201).json({
                success: true,
                data: todo,
                message: 'Task is fetched successfully!!!'
            });
        }else{
            res.status(404).json({
                success: false,
                message: `Task is not existed by this Title : ${req.body.title}`
            });
        }
    } catch (error) {
       res.json({
           success: false,
           message: error.message
       });
    }
});

exports.getAllTasks = asyncHandler(async (req, res) => {
    try {
        const allTasks = await Todo.find();
        allTasks.sort(function(a, b) {
            var keyA = new Date(a.targetDate),
              keyB = new Date(b.targetDate);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
        res.status(201).json({
            success: true,
            data: allTasks,
            message: 'Tasks sre fetched successfully!!!'
        });
    } catch (error) {
       res.json({
           success: false,
           message: error.message
       });
    }
});
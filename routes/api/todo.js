const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');


// GET api/todo-list/mylist
// @desc Get all available lists for user
// @access private
router.get('/user/mylist/:id', auth, async (req, res) => {

    res.send('TODOLIST ROUTE')
});


// POST api/todo-list/mylist
// @desc Create a new todolist
// @access private
router.post('/user/mylist/:id', [auth,
    check('taskName', 'A task name is required')
        .not()
        .isEmpty(),
    check('listType', 'ListType is required')
        .not()
        .isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    
    const {
        taskName,
        task,
        completed,
        listType
    } = req.body;

    // Build TodoObject
    const todoObject = {};
    todoObject.user = req.user.id;
    todoObject[listType] = {};

    if (taskName) todoObject[listType].taskName = taskName;
    if (task) todoObject[listType].task = task;
    if (completed) todoObject[listType].completed = completed;

    res.send(todoObject);
});


// PUT api/todo-list/mylist
// @desc Update exisiting TodoList
// @access private
router.put('/', (req, res) => {
    res.send('TODOLIST ROUTE')
});


// DELETE api/todo-list/mylist
// @desc Delete TodoList Entry
// @access private
router.delete('/', (req, res) => {
    res.send('TODOLIST ROUTE')
});


// DELETE api/todo-list/mylist
// @desc Delete TodoList Entry
// @access private
router.delete('/', (req, res) => {
    res.send('TODOLIST ROUTE')
});




module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../../authMiddleware/auth');
const { check, validationResult } = require('express-validator');
const TodoContainer = require('../../models/TodoContainer');
const TodoData = require('../../models/TodoData');
const { update } = require('../../models/TodoContainer');



// GET api/todo-list/my-list
// @desc Get all available lists for user
// @access private
router.get('/user/my-list/:id', auth, async (req, res) => {
    try {
         const todo = await TodoContainer.find({ user: req.params.id })
         if (!todo) {
             res.status(400).json({ msg: 'No todo lists available for this user '});
         };

         // Prevent logged in user from accessing someone elses todo list
         if (todo[0].user.toString() !== req.user.id) {
             return res.status(401).json({ msg: 'Not Authorized '});
         };
         
         res.json(todo[0]);

    } catch (err) {        
        console.error(err.message);
        res.status(500).send('Server Error');
    };    
});


// POST api/todo-list/my-list
// @desc Create a new todolist
// @access private
router.post('/user/my-list/:id', [auth,
    check('taskName', 'A task name is required')
        .not()
        .isEmpty(),
    check('listType', 'ListType is required')
        .not()
        .isEmpty(),
    check('task', 'Task is required')
        .not()
        .isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    
    try {
        // check if user has a todo List setup.
        let todo = await TodoContainer.findOne({ user: req.params.id });
        if (todo) {
            return res.status(400).json({ msg: 'There is already a todo container created for this account.'});
        };
       
        const {
            taskName,
            task,
            completed,
            listType
        } = req.body;


        let todoUserData = new TodoData({
            taskName,
            task,
            completed,
            user: req.user.id
        });        


        todo = new TodoContainer({
            listType,
            user: req.user.id
        })


        if ( listType === 'personal' ) {
            todo.personalTodo.push( todoUserData );
        };
        todo.workTodo.push( todoUserData );  

        let todoData = await TodoData.findOne({ user: req.params.id });
        if (!todoData) await todoUserData.save();

        await todo.save();

        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


// PUT api/todo-list/user/my-list
// @desc Update exisiting TodoList ( SaveButton in UI )
// @access private
router.put('/user/my-list/:id',[auth,
    check('listType', 'ListType is required')
        .not()
        .isEmpty(),
    check('task', 'Task is required')
        .not()
        .isEmpty()
], async (req, res) => {
    try {
        let todo = await TodoContainer.find({ user: req.params.id });

        if (!todo) {
            res.status(400).json({ msg: 'No todo lists available for this user '});
        };
    
        const {
            listType,
            taskName,
            task,
            completed,
            taskId          
        } = req.body;
        
        
        const listOfUserTodos = todo[0][listType].map(tdo => tdo._id);
        const idIndex = listOfUserTodos.findIndex( id => id.toString() === taskId);
        
        const updatedTask = {
            ...todo[0][listType][idIndex],
            taskName,
            task,
            completed
        };


        // todo = {
        //     ...todo,
        //     [listType]: updatedTodo
        // };        

       
        res.json(updatedTask);



    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


// DELETE api/todo-list/my-list
// @desc Delete TodoList Entry
// @access private
router.delete('/todo-list/my-list/:id', auth, async (req, res) => {
    // Code for deleting the entire todo list ( 
     //   Both personal and work todos
  
    res.send('DELETED TODOLIST' );
});


// DELETE api/todo-list/my-list
// @desc Empty and existing list ( not delete )
// @access private
router.put('/', (req, res) => {
    // This route will not delete the list, but
    // will delete the contents inside of the list.
    res.send('TODOLIST ROUTE')
});




module.exports = router;
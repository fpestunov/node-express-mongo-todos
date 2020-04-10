const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

// получим данные асинхронно и передадим на Гл страницу
router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.render('index', {
        title: 'Todos List',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Todo',
        isCreate: true
    })
})

module.exports = router
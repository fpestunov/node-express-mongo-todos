const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Todos List'
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Todo'
    })
})

module.exports = router
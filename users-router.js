let {getUsers, addUser} = require('./repository')

const express = require('express')
const router = express.Router()

//app settings
router.get('/', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const users = await getUsers()
    const user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
    res.send(users)
})

router.post('/', async (req, res) => {
    await addUser('Lena')
    res.send({success: true})
})

module.exports = router


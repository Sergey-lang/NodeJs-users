let {getUsers, addUser} = require('./repository')
import express from 'express';

const router = express.Router()

export type UserType = {
    id: number
    name: string
}

//app settings
router.get('/', async (req, res) => {
    let users = await getUsers()

    if (!!req.query.search) {
        users = users.filter((u: any) => u.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const users = await getUsers()
    const user = users.find((u: any) => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
    res.send(users)
})

router.post('/', async (req, res) => {
    const name = req.body.name
    await addUser(name)
    res.send({success: true})
})

module.exports = router


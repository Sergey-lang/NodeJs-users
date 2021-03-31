import express, {Request, Response} from 'express';

let {getUsers, addUser, updateUser, deleteUser, getUser} = require('./repository')

const router = express.Router()

//app settings
router.get('/', async (req: Request, res: Response) => {
    const users = await getUsers(req.query.search)

    res.send(users)
})

router.get('/:id', async (req: Request, res: Response) => {
    const userId = req.params.id
    const user = await getUser(userId)

    res.send(user)
})

router.post('/', async (req: Request, res: Response) => {
    const name = req.body.name
    await addUser(name)

    res.send({success: true})
})

router.put('/', async (req: Request, res: Response) => {
    const name = req.body.name
    const id = req.body.id
    await updateUser(id, name)

    res.send({success: true})
})

router.delete('/:id', async (req: Request, res: Response) => {
    const userId = req.body.id
    await deleteUser(userId)

    res.send({success: true})
})

module.exports = router


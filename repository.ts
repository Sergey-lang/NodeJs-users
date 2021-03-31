const {readJsonFromFile, writeJsonToFile} = require('./fs-utils')

const getUsers = () => {
    return readJsonFromFile('db.json')
}

const addUser = async (name: string) => {
    let users = await getUsers()
    users.push({name, id: 3})
    return writeJsonToFile('db.json', users)
}

exports.getUsers = getUsers
exports.addUser = addUser

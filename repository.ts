import User from './models/User';

const getUsers = (search: string) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search)})
    }
}

const getUser = (id: string) => {
    return User.findById({_id: id})
}

const addUser = async (name: string) => {
    const user = new User({name})
    return user.save()
}

const deleteUser = async (id: string) => {
    return User.findOneAndDelete({id})
}

const updateUser = async (id: string, name: string) => {
    return User.findByIdAndUpdate({id}, {name: name})
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.addUser = addUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser

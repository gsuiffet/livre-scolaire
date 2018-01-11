function student(state = {}, action) {
    if(action.type == 'increaseStudent') {
        return state +1
    } else {
        return state
    }
}

module.exports = student;
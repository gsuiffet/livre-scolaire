function student(state = [], action) {
    if(action.type == 'addstudent') {
        var allStudent = state.slice(0);
        allStudent.push(action.newstudent);
        return allStudent
    } else {
        return state
    }
}

module.exports = student;
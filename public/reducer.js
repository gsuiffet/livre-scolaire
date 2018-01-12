function student(state = [], action) {
    if(action.type == 'addstudent') {
        var allStudent = state.slice(0);
        for(var i=0; i<state.length; i++ ) {
            var val = state[state.length - 1].id;
            val++;
            action.newstudent.id = val;
            allStudent.push(action.newstudent);
            return allStudent
        }
    }
    if(action.type == 'deleteStudent') {
        var allStudent = state.slice(0);
        var resetId = 0;
        for(var i=0; i<state.length; i++ ) {
            allStudent[i].id = resetId++;
            console.log("allStudent",allStudent);
            if (state[i].id = action.id) {
                i = state[i].id;
                allStudent.splice(i, 1);
                return allStudent
            }
        }
    } else {
        return state
    }
}

module.exports = student;
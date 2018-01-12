function student(state = [], action) {
    if(action.type == 'addstudent') {
        var allStudent = state.slice(0);
        if (state.length == 0) {
            action.newstudent.id = 0;
            allStudent.push(action.newstudent);
            return allStudent
        } else {
            for(var i=0; i<state.length; i++ ) {
                var val = state[state.length - 1].id;
                val++;
                action.newstudent.id = val;
                allStudent.push(action.newstudent);
                return allStudent
            }
        }
    }
    if(action.type == 'deleteStudent') {
        var allStudent = state.slice(0);
        for(var i=0; i<allStudent.length; i++ ) {
            if (state[i].id = action.id) {
                i = state[i].id;
                allStudent.splice(i, 1);
                for(var j=0; j<allStudent.length; j++ ) {
                    allStudent[j].id = j
                }
                return allStudent
            } else {
                allStudent.splice(0, 1);
                for(var j=0; j<allStudent.length; j++ ) {
                    allStudent[j].id = j
                }
                return allStudent
            }
        }
    }
    if (action.type == 'updateStudent') {
        var allStudent = state.slice(0);
        for(var i=0; i<allStudent.length; i++ ) {
            if (allStudent[i].id = action.id.id) {
                i = allStudent[i].id;
                allStudent[i].name = action.id.name;
                allStudent[i].lastname = action.id.lastname;
                allStudent[i].password = action.id.password;
                allStudent[i].level = action.id.level;
                for(var j=0; j<allStudent.length; j++ ) {
                    allStudent[j].id = j
                }
                return allStudent
            } else {
                allStudent[0].name = action.id.name;
                allStudent[0].lastname = action.id.lastname;
                allStudent[0].password = action.id.password;
                allStudent[0].level = action.id.level;
                for(var j=0; j<allStudent.length; j++ ) {
                    allStudent[j].id = j
                }
                return allStudent
            }
        }
    } else {
        return state
    }
}

module.exports = student;
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
                var position = state[i].id;
                allStudent.splice(position, 1);
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
                var position = allStudent[i].id;
                allStudent[position].name = action.id.name;
                allStudent[position].lastname = action.id.lastname;
                allStudent[position].password = action.id.password;
                allStudent[position].level = action.id.level;
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
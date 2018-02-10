function student(state = [], action) {
    if (action.type == 'addstudent') {
        if (state.length == 0) {
            action.newstudent.id = 0;
            return [...state, action.newstudent];
        } else {
            for(let i = 0; i < state.length; i++) {
                let val = state[state.length - 1].id;
                val++;
                action.newstudent.id = val;
                return [...state, action.newstudent];
            }
        }
    }
    if(action.type == 'deleteStudent') {
        let allStudent = state.slice(0);
        for(let i=0; i<allStudent.length; i++ ) {
            if (allStudent[i].id == action.id) {
                allStudent.splice(action.id, 1);
                for(let j=0; j<allStudent.length; j++ ) {
                    allStudent[j].id = j
                }
                return allStudent;
            }
        }
    } if (action.type == 'updateStudent') {
        let allStudent = state.slice(0);
        for(let i=0; i<allStudent.length; i++ ) {
            if (allStudent[i].id == action.id.id) {
                allStudent[i].name = action.id.name;
                allStudent[i].lastname = action.id.lastname;
                allStudent[i].password = action.id.password;
                allStudent[i].level = action.id.level;
                return allStudent;
            }
        }
    } else {
        return state
    }
}

module.exports = student;
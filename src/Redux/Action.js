const ADD_COMMENTS = 'ADD_COMMENTS';


const note_action = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          all :action_data 
        }
}

export {note_action}
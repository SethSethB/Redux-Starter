//A reducer takes an action and a copy of current state

function posts(state =[], action){
    console.log(state, action);
    return state;
}

export default posts;
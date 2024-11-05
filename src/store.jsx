import {createStore} from "redux"

const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';

const initialState = {
    task: [],
    isLoading:false
};  


// STEP 1: Create reducer function
const taskReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TASK:
            return {
                ...state, task: [...state.task, action.payload]
            };

        case DELETE_TASK:{

            const updatedTask = state.task.filter((_, index) => index !== action.payload);
            return {
                ...state, task: updatedTask,
            };
        }
        
        default:
            return state;
    }
};


// STEP 2: Create the redux store using reducer
export const store = createStore(taskReducer) ;

// STEP 3: Dispatch an action to add a task
// store.dispatch({type: ADD_TASK, payload: "STROY"});
// store.dispatch({type: ADD_TASK, payload: "Sourav"});
// store.dispatch({type: ADD_TASK, payload: "I am the best"});


// console.log(store.getState()) ;

// store.dispatch({type: DELETE_TASK, payload: 0});
// console.log(store.getState())
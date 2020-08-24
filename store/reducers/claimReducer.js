import {FETCH_CLAIMS_BEGIN,FETCH_CLAIMS_SUCCESS,FETCH_CLAIMS_ERROR} from '../actions/claimActions.js'

const initState ={
    items: [],
    loading: false,
    error: null
};

export default function claimReducer (state = initState, action)  {
    console.log("action" +  action.type);
  switch (action.type){
    case FETCH_CLAIMS_BEGIN:
        return {
            // ...state,
          loading: true,
          error: null
        };
      case FETCH_CLAIMS_SUCCESS:
      return {
            loading: false,           
            items: action.payload.data
           
      }
      case FETCH_CLAIMS_ERROR:
      return {
            error: action.payload.error,
            loading: false
      }
      default: return state
  };  
 
};

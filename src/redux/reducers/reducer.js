import { GET_DETAILS } from "../constants";

const initialState={
    details:[],
};


const Reducer=(state=initialState,action)=>{
      switch (action.type) {
        case GET_DETAILS:
            return {
                details: action.payload,
            };
        default:
            return state;
      }
};

export default Reducer;
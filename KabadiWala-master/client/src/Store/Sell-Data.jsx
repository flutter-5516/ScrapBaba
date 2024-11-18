import { createContext, useReducer } from "react";

// Create context with default values
export const PostDataContext = createContext({
  postData: [],
  addData: () => {},
});

// Define initial state
const initialState = {
  postData: [],
};

// Reducer function to handle actions
const postDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, postData: [...state.postData, action.payload] };
    default:
      return state;
  }
};

const PostDataProvider = ({ children }) => {
  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(postDataReducer, initialState);

  // Function to add data to the state
  const addData = (dataType, dataWeight, dataLocation, dataPhone) => {
    dispatch({
      type: "ADD_DATA",
      payload: {
        wasteType: dataType,
        weight: dataWeight,
        location: dataLocation,
        phone: dataPhone,
      },
    });
  };

  return (
    <PostDataContext.Provider value={{ postData: state.postData, addData }}>
      {children}
    </PostDataContext.Provider>
  );
};

export default PostDataProvider;

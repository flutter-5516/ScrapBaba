import React, { createContext, useReducer } from "react";

export const PostDataContext = createContext({
  postData: [],
  addData: () => {},
});

const initialState = {
  postData: [], 
};

const postDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, postData: [...state.postData, action.payload] };
    default:
      return state;
  }
};

const PostDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postDataReducer, initialState);

  const addData = (post) => {
    dispatch({
      type: "ADD_DATA",
      payload: post, 
      id: Date.now().toString(),
    });
  };

  return (
    <PostDataContext.Provider value={{ postData: state.postData, addData }}>
      {children}
    </PostDataContext.Provider>
  );
};

export default PostDataProvider;

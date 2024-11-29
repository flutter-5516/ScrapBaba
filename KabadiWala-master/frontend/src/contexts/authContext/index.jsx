import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create Context
const AuthContext = createContext();

// Custom Hook to use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider Component
export function AuthProvider({ children }) {
  const [currUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

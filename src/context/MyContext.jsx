// MyContext.js
import React, { createContext, useState } from 'react';

export const TheContext = createContext();

const MyContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
  };

  const values = {
    handleDark,
    dark
  };

  return (
    <TheContext.Provider value={values}>
      {children}
    </TheContext.Provider>
  );
};

export default MyContext;

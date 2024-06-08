import React, { createContext, useContext } from 'react';
import config from '../config'; // Adjust the path as necessary

// Create the context
const ConfigsContext = createContext();

// Custom hook to use the ConfigsContext
export const useConfigs = () => {
  return useContext(ConfigsContext);
};

// Context provider component
export const ConfigsProvider = ({ children }) => {
  const configs = config;

  return (
    <ConfigsContext.Provider value={configs}>
      {children}
    </ConfigsContext.Provider>
  );
};


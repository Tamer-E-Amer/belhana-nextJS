"use client";
/**
 * Context to manage the view state (list or grid).
 * @typedef {Object} ViewContextType
 * @property {string} view - Current view type, either "list" or "grid".
 * @property {Function} setView - Function to update the current view.
 */
import { createContext, useState } from "react";

/**
 * Context for view management.
 * @type {import('react').Context<ViewContextType>}
 */
export const ViewContext = createContext();

/**
 * Provider component that manages the view state and provides it to child components.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will have access to the view context.
 * @returns {JSX.Element} The provider component for the ViewContext.
 */
export const ViewProvider = ({ children }) => {
  const [view, setView] = useState("list");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

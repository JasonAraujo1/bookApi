
import { createContext, useContext } from 'react';

// 
type AuthContextType = {
  inputData: string,
  setInputData: any,
}

export const Context = createContext<AuthContextType | undefined>(undefined);

export function UseAuth() {
  const context = useContext(Context)
  
  if (!context) {
    throw new Error("error")
  }
  return context
} 

'use client';
import { useSelector } from "react-redux";

export const AuthCheck = () => {
  const accessToken = useSelector((state) => state.auth?.accessToken);
  const localStorageToken = JSON.parse(localStorage.getItem("auth"))?.accessToken;
  
  if (accessToken || localStorageToken) {
      return true;
  }

  return false;
};

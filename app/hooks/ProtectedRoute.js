'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from '../reduxStore/features/auth/authSlice';

const ProtectedRoute = ({ children }) => {
  const accessToken = useSelector((state) => state.auth?.accessToken);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Load authentication data from localStorage if not available in the Redux store
    if (!accessToken) {
      const authData = JSON.parse(localStorage.getItem("auth"));
      if (authData && authData.accessToken) {
        dispatch(
          userLoggedIn({
            accessToken: authData.accessToken,
            user: authData.user,
          })
        );
      } else {
        router.push("/login");
      }
    }
  }, [accessToken, dispatch, router]);

  // Return null if not authenticated, so the page is not rendered
  return accessToken ? children : null;
};

export default ProtectedRoute;




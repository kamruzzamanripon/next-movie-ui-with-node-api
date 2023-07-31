'use client';
import { AuthCheck } from '@/app/hooks/AuthCheck';
import { userLoggedOut } from '@/app/reduxStore/features/auth/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import ComingSoon from "../icons/ComingSoon";
import Community from "../icons/Community";
import Friends from "../icons/Friends";
import Home from "../icons/Home";
import Logout from "../icons/Logout";
import MakeMovie from "../icons/MakeMovie";
import Media from "../icons/Media";
import MovieLogo from "../icons/MovieLogo";
import Profile from "../icons/Profile";
import Settings from "../icons/Settings";


const LiftSideBar = () => {
  const isAuthenticated = AuthCheck();
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    router.push("/login");
  };

  return (
    <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
      <Link href="/">
        <div className=" font-bold text-lg flex items-center gap-x-3">
          <MovieLogo />
          <div className="tracking-wide dark:text-white">
            RMovie<span className="text-red-600">.</span>
          </div>
        </div>
      </Link>

      <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
        <div className="text-gray-400/70  font-medium uppercase">Menu</div>
        <Link 
          href="/"
          className="flex items-center space-x-2 py-1 dark:text-white  font-semibold  border-r-4 border-r-red-600 pr-20 "
        >
          <Home />
          <span>Home</span>
        </Link>

        <Link 
          href="/ai-make-movie"
          className="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
        >
         <MakeMovie />
          <span>Ai Make Movie</span>
        </Link>
        <Link 
          href="/manual-make-movie"
          className="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
        >
         <MakeMovie />
          <span>Manual Make Movie</span>
        </Link>

        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#"
        >
          <Community />
          <span>Community</span>
        </a>
        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#"
        >
          <ComingSoon />
          <span>Coming Soon</span>
        </a>

        <div className="mt-8 text-gray-400/70  font-medium uppercase">
          Social
        </div>
        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#"
        >
          <Profile />
          <span>Profile</span>
        </a>
        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#"
        >
          <Friends />
          <span>Friends</span>
        </a>
        <Link
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="/make-category"
        >
          <Media />
          <span>Make Category</span>
        </Link>

        <div className="mt-8 text-gray-400/70  font-medium uppercase">
          General
        </div>
        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#"
        >
          <Settings />
          <span>Settings</span>
        </a>

        { isAuthenticated && (
        <a
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
          href="#"
          onClick={logout}
        >
          <Logout />
          <span>Logout</span>
        </a>
         )}

        { !isAuthenticated && (
          <Link href="/login"
          className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
        >
          <Logout />
          <span>login {AuthCheck}</span>
        </Link>
        )}
        
      </div>
    </aside>
  );
};

export default LiftSideBar;

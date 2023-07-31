import Link from "next/link";
import MovieLogo from "./component/icons/MovieLogo";

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-gray-700 dark:bg-red-600 p-4 pb-2">
        <div>
          <select
          className="border rounded-md w-52 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        </div>
        <Link href="/">
        <div className=" font-bold text-lg flex items-center gap-x-3 hidden md:flex">
                <MovieLogo />
                <div className="tracking-wide text-blue-200 dark:text-white">RMovie<span className="text-red-600">.</span></div>
            </div>
        </Link>
        <div >
          <ul className="flex space-x-3">
            <li className="text-blue-200 cursor-pointer hover:text-white dark:hover:text-black">TV</li>
            <li className="text-white dark:text-black font-semibold">Movies</li>
            <li className="text-blue-200 cursor-pointer hover:text-white dark:hover:text-black">Animes</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;
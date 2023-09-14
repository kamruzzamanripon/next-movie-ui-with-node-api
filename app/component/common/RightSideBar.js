import Image from 'next/image';
import ImdbLogo from "../icons/ImdbLogo";

const RightSideBar = () => {
  return (
    <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
      <div className="relative items-center content-center flex">
        <span className="text-gray-400 absolute left-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
          placeholder="Search ..."
        />
      </div>
      <div className="mt-10">
        <span className="font-semibold text-gray-700 dark:text-white">
          Popular Movies
        </span>
        <ul className="mt-4 text-gray-400 text-xs space-y-3">
          <li className="flex space-y-3 space-x-3 border p-5 rounded-md border-x-2">
            
          <Image
            src="/ShawshankRedemptionMoviePoster.jpg" // Start with a leading slash to indicate the root
            className="w-1/3 rounded-md"
            alt="Shawshank Redemption Movie Poster"
            width={105} 
            height={105} 
            layout="responsive"
          />

           <div className="flex flex-col justify-between  ">
              <div className="flex flex-col space-y-1">
                <span className="text-gray-700 dark:text-white font-semibold">
                  The Shawshank Redemption
                </span>
                <span className="text-xxs hidden xl:block">Drama</span>
              </div>
              <div className="flex space-x-2 items-center">
                <ImdbLogo />
                <span>9.2</span>
              </div>
            </div>
          </li>
          <li className="pt-1">
            <a
              href="#"
              className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white"
            >
              See More
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <span className="font-semibold text-gray-700 dark:text-white">
          Favorites
        </span>
        <ul className="mt-4 text-gray-400 text-xs space-y-3">
          <li className="flex space-x-3 border p-5 rounded-md border-x-2">
           
            <Image
                 src="/The_Matrix_Poster.jpg"
                 className="object-cover w-1/3 rounded-md"
                alt="Bird flying animation" 
                width={105} 
                height={105} 
                layout="responsive"
            />
            <div className="flex flex-col justify-between  ">
              <div className="flex flex-col space-y-1">
                <span className="text-gray-700 dark:text-white font-semibold">
                  The Matrix
                </span>
                <span className="text-xxs hidden xl:block">Action, Sci-Fi</span>
              </div>
              <div className="flex space-x-2 items-center">
                <ImdbLogo />
                <span>8.7</span>
              </div>
            </div>
          </li>
          <li className="pt-1">
            <a
              href="#"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white"
            >
              See More
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSideBar;

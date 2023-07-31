'use client';
import { useTopMoviesQuery } from "@/app/reduxStore/features/movie/moviesApi";
import { useEffect } from "react";
import ImdbLogo from "../icons/ImdbLogo";
import NextPrev from "../icons/NextPrev";

const TopMovies = () => {
  const { data, error, isLoading } = useTopMoviesQuery();
  console.log("movie data", data)

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return (
    <section className="mt-9 bg-lime-300 dark:bg-rose-500 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-base dark:text-white">
          Top Movies
        </span>
        <div className="flex items-center space-x-2 fill-gray-500">
          <NextPrev />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
        {data.data && data.data.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600"
          >
            <img
              src={movie.image}
              className="h-4/5 object-cover w-full"
              alt={movie.title}
            />
            <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
              <span className="capitalize font-medium truncate">{movie.title}</span>
              <div className="flex space-x-2 items-center text-xs">
                <ImdbLogo />
                <span>7.4</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLoading && isLoading}
      {error && error}
    </section>
  );
};

export default TopMovies;

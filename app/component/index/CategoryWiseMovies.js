/* eslint-disable react/jsx-key */
'use client';
import { useCategoryWiseMoviesQuery } from "@/app/reduxStore/features/category/categoryApi";
import Image from 'next/image';
import ImdbLogo from "../icons/ImdbLogo";
import NextPrev from "../icons/NextPrev";

const CategoryWiseMovies = () => {
  const { data, error, isLoading } = useCategoryWiseMoviesQuery();
  console.log('category wise movie data', data)

  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33FF', '#FFFF33'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.data.map((category, indexOne) => (
        <section className="mt-9 bg-blue-400 dark:bg-black p-5 rounded-md" style={{ backgroundColor: getRandomColor() }} key={indexOne}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-base dark:text-white">{category.name} Movies</span>
            <div className="flex items-center space-x-2 fill-gray-500">
              <NextPrev />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
            {category.movies.map((movie, indexTwo) => (
              <div className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600" key={indexTwo}>
                <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                  <span className="capitalize  font-medium truncate">{movie.title}</span>
                  <div className="flex space-x-2 items-center text-xs">
                    <ImdbLogo />
                    <span>{getRandomNumber()}</span>
                  </div>
                </div>
                <Image
                  src={movie.image}
                  className=" h-4/5 object-cover w-full"
                  alt={movie.title}
                  width={105} 
                height={105} 
                layout="responsive"
                />
              </div>
            ))}


          </div>

        </section>
      ))}
    </>
  );
};

export default CategoryWiseMovies;
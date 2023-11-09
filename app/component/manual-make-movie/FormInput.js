'use client';
import { useAllCategoriesQuery } from "@/app/reduxStore/features/category/categoryApi";
import { useManualMovieStoreMutation } from "@/app/reduxStore/features/movie/moviesApi";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from "react";

const FormInput = () => {
  const { data, isLoading, isError } = useAllCategoriesQuery();
  const [manualMovieStore, { isSuccess }] = useManualMovieStoreMutation();
  const router = useRouter();
  console.log("all manualMovieStore", manualMovieStore)

  const [movieData, setMovieData] = useState({
    title: '',
    category_id: '',
    description: '',
    image: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMovieData({ ...movieData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', movieData.title);
    formData.append('category_id', movieData.category_id);
    formData.append('description', movieData.description);
    formData.append('image', movieData.image);
    console.log('form submit', movieData)
    try {
      const response = await manualMovieStore(formData);
      // Handle the success response
      console.log('Response from server:', response.data);
      // Assuming you want to reset the form after successful submission
      setMovieData({
        title: '',
        category_id: '',
        description: '',
        image: null,
      });
      router.push("/");
    } catch (error) {
      // Handle the error
      console.error('Error saving the movie:', error);
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching categories.</div>;
  }
  return (
    <div>
      <div className="text-center mb-8 relative">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          Manual Movie Maker
        </h1>
       
        <Image
                src="/storytelling-08.gif"
                alt="input"
                className="rounded-full w-48 h-48 absolute -top-5 right-0 sm::hidden"
                width={200}
                height={200}
            />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Movie Title
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your Movie Title..."
              name="title"
              onChange={handleChange}

            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Movie Category
            </label>
            <select
              name="category_id"
              onChange={handleChange}
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose category</option>
              {data && data.data?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Movie Short Description
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type Movie short description..."
              v-model="movieData.description"
              defaultValue={""}
              name="descriptin"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Movie image
            </label>
            <input
              type="file"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your Movie Title..."
              name="image"
              onChange={handleFileChange}
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-md dark:border"
            >
              Make Movie
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default FormInput;

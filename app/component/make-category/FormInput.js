'use client';
import { useCategoryStoreMutation } from "@/app/reduxStore/features/category/categoryApi";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const FormInput = () => {
  const [categoryStore] = useCategoryStoreMutation();
  const router = useRouter();
  const [categoryData, setCategoryData] = useState({
    title: '',
    image: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCategoryData({ ...categoryData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', categoryData.title);
    formData.append('image', categoryData.image);
    console.log('categry submit form', categoryData)
   
    try {
      const response = await categoryStore(formData);
      // Handle the success response
      console.log('Response from server:', response.data);
      // Assuming you want to reset the form after successful submission
      setCategoryData({
        name: '',
        image: null,
      });
      
    } catch (error) {
      console.error('Error saving the movie:', error);
    }
  };
  return (
    <div className="bg-gray-200 p-5 rounded-md dark:bg-black">
      <div className="text-center mb-8 relative">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          Create Category
        </h1>
        <img
          src="AS0007464_07.gif"
          alt
          className="rounded-full w-48 h-48 absolute -top-5 right-0 sm::hidden"
        />
      </div>

      <form onSubmit={handleSubmit}>
      <div className="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category Name
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Category name..."
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category Image
          </label>
          <input
            type="file"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md dark:border"
          >
            Make Category
          </button>
        </div>
      </div>
      </form>

    </div>
  );
};

export default FormInput;

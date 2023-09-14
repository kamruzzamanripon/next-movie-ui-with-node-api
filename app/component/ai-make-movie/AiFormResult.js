'use client';
import { useAllCategoriesQuery } from "@/app/reduxStore/features/category/categoryApi";
import { useAiMovieStoreMutation } from "@/app/reduxStore/features/movie/moviesApi";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AiFormResult = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    category_id: '',
    description: '',
    image: null, 
  });
  const aiMovieData = useSelector((state)=>state.movies.aiMovieData);
  const { data, isLoading, isError } = useAllCategoriesQuery();
  const router = useRouter()
  const [aiMovieStore, { isSuccess }] = useAiMovieStoreMutation();

  //b64_json convert image src
  const getImageSource = () => {
    const imageData = aiMovieData?.b64JsonImage?.b64_json || '';
    return `data:image/png;base64,${imageData}`;
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  //set ai data into movieData
  useEffect(()=>{
    setMovieData({
      title: aiMovieData?.title,
      description: aiMovieData?.synopsis,
      image: aiMovieData?.b64JsonImage?.b64_json,
      });
  },[aiMovieData?.b64JsonImage?.b64_json, aiMovieData?.synopsis, aiMovieData?.title])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(movieData.category_id == ''){
      alert('please Select Category')
      return;
    }
    
      console.log('Response from server:-2', movieData);
    
    try {
      const formData = new FormData();
      formData.append('title', movieData.title);
      formData.append('category_id', movieData.category_id);
      formData.append('description', movieData.description);
      formData.append('image', movieData.image);
      console.log('form submit', movieData)
      const response = await aiMovieStore(formData);
      // Handle the success response
      console.log('Response from server:', [...formData]);
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

  
  return (
    <div className="bg-gray-200 p-5 rounded-md dark:bg-black my-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          This is your Search Result
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border">
      <div class="mb-6 flex items-center justify-center">
          
          <Image
                src={getImageSource()}
                alt="result-image"
                className="rounded-md border border-2 border-x-1 w-[350px]"
                name="image"
                onChange={handleChange}
                width={105} 
                height={105} 
                layout="responsive"
            />
        </div>

        
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
            value={aiMovieData?.title}
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
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="category_id"
              onChange={handleChange}
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
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Movie short description..."
            value={aiMovieData?.synopsis}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="text-right">
          <button className="bg-black text-white p-3 rounded-md dark:border">
            Save your Movie
          </button>
        </div>
      </div>
      </form>

    </div>
  );
};

export default AiFormResult;
